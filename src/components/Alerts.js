import Swal from "sweetalert2";

const Alerta = (title, icon) => {
  Swal.fire({
    toast: true,
    icon: icon,
    title: title,
    position: "bottom",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
};

export default Alerta;
