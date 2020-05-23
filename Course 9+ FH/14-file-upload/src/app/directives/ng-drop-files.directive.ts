import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import { FileItem } from "../models/file-item.model";

@Directive({
  selector: "[appNgDropFiles]",
})
export class NgDropFilesDirective {
  @Input() files: FileItem[];
  @Output() dragOver: EventEmitter<boolean>;

  constructor() {
    this.files = [];
    this.dragOver = new EventEmitter();
  }

  @HostListener("dragover", ["$event"])
  public onDragEnter = (event: any) => {
    this.dragOver.emit(true);
    this._preventOpen(event);
  };

  @HostListener("dragleave", ["$event"])
  public onDragLeave = (event: any) => {
    this.dragOver.emit(false);
  };

  @HostListener("drop", ["$event"])
  public onDrop = (event: any) => {
    this.dragOver.emit(false);
    const transfer = this._getTransfer(event);
    if (!transfer) return;

    this._getFiles(transfer.files);
    this._preventOpen(event);
  };

  private _getTransfer = (event: any) => {
    return event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;
  };

  private _getFiles = (fileList: FileList) => {
    for (const property in Object.getOwnPropertyNames(fileList)) {
      const fileTem = fileList[property];

      if (this._fileCanUpload(fileTem)) this.files.push(new FileItem(fileTem));
    }
  };

  // FILES VALIDATION
  private _fileCanUpload = (file: File): boolean => {
    if (!this._fileExists(file.name) && this._fileFormat(file.type, "image"))
      return true;
    else return false;
  };

  private _preventOpen = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  private _fileExists = (fileName: string): boolean => {
    let found = this.files.find((file) => file.fileName === fileName);
    if (found) return true;
    else return false;
  };

  private _fileFormat = (fileFormat: string, type: string): boolean => {
    return fileFormat === "" || fileFormat === undefined
      ? false
      : fileFormat.startsWith(type);
  };
}
