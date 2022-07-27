import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DataTableStudents from "../components/Students/DataTableStudents";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "../css/students.css";

const Students = () => {
  const [students, setStudents] = useState([]);
  const studentsData = (info) => {
    setStudents(info);
  };
  return (
    <div className="studentBody">
      <div className="studentSection">
        <h1>Estudiantes</h1>
        <div className="registerButton">
          <AddCircleOutlineIcon fontSize="small" />
          <Link to="/register">Registrar Estudiante</Link>
        </div>
      </div>
      <p>
        Estudiantes registrados: <b>{students.length}</b>
      </p>
      <div className="studentSearch">
        <input
          type="text"
          placeholder="Buscar estudiante por nombre, identificacion..."
        />
      </div>
      <div className="studentTable">
        <DataTableStudents studentsData={studentsData} />
      </div>
    </div>
  );
};

export default Students;
