import React from "react";
import { Link } from "react-router-dom";
import "../css/notfound.css";

const NotFound = () => {
  return (
    <div className="notFoundBody">
      <h1>ERROR</h1>
      <p>
        La página a la que intenta acceder no existe o no está disponible, por
        favor escribir la dirección URL correctamente.
      </p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default NotFound;
