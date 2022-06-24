import Swal from "sweetalert2";

const Alerta = (icon, title) => {
  Swal.fire({
    toast: true,
    icon: icon,
    title: title,
    position: "bottom",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export default Alerta;
