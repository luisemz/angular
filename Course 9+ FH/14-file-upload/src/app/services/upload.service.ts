import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from "firebase";
import { FileItem } from "../models/file-item.model";

interface Image {
  fileName: string;
  url: string;
}

@Injectable({
  providedIn: "root",
})
export class UploadService {
  private pathFiles: string;

  constructor(private db: AngularFirestore) {
    this.pathFiles = "img";
  }

  uploadFilesFirebase = (files: FileItem[]) => {
    const storageRef = firebase.storage().ref();
    for (const item of files) {
      item.isUpload = true;
      if (item.progress >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.pathFiles}/${item.fileName}`)
        .put(item.file);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>
          (item.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        (error) => {
          console.error("Error to upload", error);
        },
        () => {
          console.log("File uploaded");
          uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            item.url = downloadUrl;
            item.isUpload = false;

            this.saveFile({ fileName: item.fileName, url: item.url });
          });
        }
      );
    }
  };

  private saveFile = (image: Image) => {
    this.db.collection(`${this.pathFiles}`).add(image);
  };
}
