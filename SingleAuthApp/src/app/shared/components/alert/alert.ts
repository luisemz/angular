import Swal from "sweetalert2";

type Icon = "success" | "error" | "warning" | "info" | "question";

export default class Alert {
  static loading = (message: string = "") => {
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      title: message,
      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      }
    });
    Swal.showLoading();
  };

  static alertButtons = (icon: Icon, title: string, message: string) => {
    return Swal.fire({
      icon: icon,
      title: title,
      text: message,
      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      }
    });
  };

  static alertNoButtons = (icon: Icon, title: string, message: string) => {
    return Swal.fire({
      icon: icon,
      title: title,
      text: message,
      showConfirmButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      }
    });
  };

  static alertConfirmButton = (icon: Icon, title: string, message: string) => {
    return Swal.fire({
      icon: icon,
      title: title,
      text: message,
      showConfirmButton: true,
      showCancelButton: false,
      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      }
    });
  };

  static toast = (icon: Icon, message: string) => {
    const Toast = Swal.mixin({
      toast: true,
      width: "350px",
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      showClass: {
        popup: "animated fadeInRight faster"
      }
    });
    Toast.fire({
      icon: icon,
      title: message
    });
  };

  static close = () => Swal.close();
}
