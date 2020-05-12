import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  loading = (title: string) => {
    Swal.fire({
      icon: "info",
      title: title,
      allowOutsideClick: false,
      showClass: {
        popup: "animated fadeInDown faster",
      },
      hideClass: {
        popup: "animated fadeOutUp faster",
      },
    });
    Swal.showLoading();
  };

  alert = (
    icon: "success" | "warning" | "error" | "info" | "question",
    title: string,
    text: string
  ) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      showCancelButton: false,
      allowOutsideClick: false,
      showClass: {
        popup: "animated fadeInDown faster",
      },
      hideClass: {
        popup: "animated fadeOutUp faster",
      },
    });
  };

  toast = (
    icon: "success" | "warning" | "error" | "info" | "question",
    title: string
  ) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      width: "350px",
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      showClass: {
        popup: "animated fadeInDown faster",
      },
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  };

  close = () => {
    Swal.close();
  };
}
