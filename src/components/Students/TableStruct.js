import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
export const columns = [
  {
    id: "Nombre",
    name: "Nombre",
    selector: (row) => row.nombres,
    sortable: true,
  },
  {
    id: "Apellidos",
    name: "Apellidos",
    selector: (row) => row.apellidos,
    sortable: true,
  },
  {
    id: "UserName",
    name: "Nombre de usuario",
    selector: (row) => row.username,
    sortable: true,
  },
  { id: "Edad", name: "Edad", selector: (row) => row.edad, sortable: true },
  {
    id: "Identificacion",
    name: "Identificación",
    selector: (row) => row.identificacion,
    sortable: true,
  },
  {
    id: "Rol",
    name: "Tipo de Usuario",
    selector: (row) => row.rol,
    sortable: true,
  },
  {
    id: "Acciones",
    name: "Acciones",
    cell: (row) => (
      <>
        <Link to="/editprofile" state={row} className="editProfile">
          <EditIcon fontSize="small"></EditIcon>
          Editar
        </Link>
      </>
    ),
  },
];

export const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};
