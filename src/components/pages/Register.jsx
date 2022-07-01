import React from "react";
import "../../css/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="registerContainer">
      <h1>Registro de datos en el aplicativo</h1>

      <div className="registerOptionContainer">
        <Link to="/register/student">
          <div className="registerInput">
            <img src="https://www.svgrepo.com/show/206812/student.svg" />
            <h3>Registrar Estudiante</h3>
          </div>
        </Link>
        <Link to="/register/teacher">
          <div className="registerInput">
            <img src="https://www.svgrepo.com/show/177587/teacher-social.svg" />
            <h3>Registrar Docente</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
