import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DataTableTeachers from "../components/Teachers/DataTableTeachers";
import "../css/teachers.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const teachersData = (info) => {
    setTeachers(info);
  };
  return (
    <div className="teacherBody">
      <div className="teacherSection">
        <h1>Docentes</h1>
        <div className="registerButton">
          <AddCircleOutlineIcon fontSize="small" />
          <Link to="/register">Registrar Docente</Link>
        </div>
      </div>
      <p>
        Docentes registrados: <b>{teachers.length}</b>
      </p>
      <div className="teacherSearch">
        <input
          type="text"
          placeholder="Buscar docente por nombre, identificacion..."
        />
      </div>
      <div className="teacherTable">
        <DataTableTeachers teachersData={teachersData} />
      </div>
    </div>
  );
};

export default Teachers;
