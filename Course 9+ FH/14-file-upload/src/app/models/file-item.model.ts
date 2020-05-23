export class FileItem {
  file: File;
  fileName: string;
  isUpload: boolean;
  progress: number;
  url: string;

  constructor(file: File) {
    this.file = file;
    this.fileName = file.name;
    this.isUpload = false;
    this.progress = 0;
  }
}
