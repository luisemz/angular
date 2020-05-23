import { Component, OnInit } from "@angular/core";
import { FileItem } from "src/app/models/file-item.model";
import { UploadService } from "src/app/services/upload.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
})
export class UploadComponent implements OnInit {
  files: FileItem[];

  isOverDrop: boolean;

  constructor(private _us: UploadService) {}

  ngOnInit(): void {
    this.clear();

    this.isOverDrop = false;
  }

  uploadFile = () => {
    this._us.uploadFilesFirebase(this.files);
  };

  clear = () => {
    this.files = [];
  };
}
