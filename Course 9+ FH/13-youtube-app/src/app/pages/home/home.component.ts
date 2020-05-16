import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

import { YoutubeService } from "src/app/services/youtube.service";
import { Channel } from "src/app/models/channel.model";
import { Video } from "src/app/models/video.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  channel: Channel;
  channelId: string;
  uploadsId: string;
  channelUploads: Video[];
  nextPageToken: string;

  loading: boolean;
  loading2: boolean;

  constructor(private _yts: YoutubeService) {}

  ngOnInit(): void {
    this.channel = null;
    this.channelId = null;
    this.uploadsId = null;
    this.nextPageToken = null;
    this.channelUploads = [];

    this.loading = false;
    this.loading2 = false;
  }

  findChannel = () => {
    this.clear(true);

    this.loading = true;

    this._yts.findChannelInfo(this.channelId).subscribe(
      (channelInfo) => {
        this.channel = channelInfo;

        this._yts.findChannelUploadListId(this.channelId).subscribe(
          (uploadsId) => {
            this.loading = false;
            this.channelId = "";
            this.uploadsId = uploadsId;

            this._yts.findChannelUploads(uploadsId).subscribe(
              (data) => {
                this.nextPageToken = data.pageToken;
                this.channelUploads = this.channelUploads.concat(data.videos);
              },
              () => {
                this.loading = false;

                this.showAlert("Videos list not found!!");
              }
            );
          },
          () => {
            this.loading = false;

            this.showAlert("Uploads list not found!!");
          }
        );
      },
      () => {
        this.loading = false;

        this.showAlert("Channel not found!!");
      }
    );
  };

  showMore = () => {
    this.loading2 = true;

    this._yts.findChannelUploads(this.uploadsId, this.nextPageToken).subscribe(
      (data) => {
        this.nextPageToken = data.pageToken;
        this.channelUploads = this.channelUploads.concat(data.videos);

        this.loading2 = false;
      },
      () => {
        this.loading2 = false;

        this.showAlert("Videos not found!!");
      }
    );
  };

  showVideo = (video: Video) => {
    Swal.fire({
      title: `<strong>${video.title}</strong>`,
      html: `<iframe width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/${video.id}" 
              frameborder="0" 
              allow="accelerometer; 
              autoplay; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture" allowfullscreen></iframe>`,
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      width: "50%",
    });
  };

  showAlert = (title: string) => {
    Swal.fire({
      icon: "error",
      text: title,
      confirmButtonText: "Close",
      confirmButtonColor: "#d33",
    });
  };

  clear = (fromFind: boolean = false) => {
    if (!fromFind) this.channelId = null;
    this.channel = null;
    this.uploadsId = null;
    this.nextPageToken = null;
    this.channelUploads = [];
  };
}
