import React from "react";
import { Link } from "react-router-dom";
import "../css/teachers.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Teachers = () => {
  return (
    <div className="teacherBody">
      <div className="teacherSection">
        <h1>Docentes</h1>
        <div className="registerButton">
          <AddCircleOutlineIcon fontSize="small" />
          <Link to="/register">Registrar Docente</Link>
        </div>
      </div>
      <p> 24 Docentes Registrados</p>
      <div className="teacherSearch">
        <input
          type="text"
          placeholder="Buscar docente por nombre, identificacion..."
        />
      </div>
      <div className="teacherTable">Soy una tabla</div>
    </div>
  );
};

export default Teachers;
