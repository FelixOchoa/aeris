import React from "react";
import { Link } from "react-router-dom";
import "../../css/sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const NavBar = () => {
  return (
    <div className="sidebarContainer">
      <aside className="sidebar">
        <h3>Aeris Software</h3>

        <div className="sidebarImg">
          <img src="https://comofuncionaque.com/wp-content/uploads/2015/05/La-persona-es-un-ser-capaz-de-pensar-razonar-tener-sentimientos-y-emociones.jpg.jpg" />
        </div>

        <span className="sidebarUserName">
          <p>Usuario Nuevo</p>
        </span>

        <nav className="menu">
          <ul>
            <li>
              <span className="dashboardIcon">
                <DashboardIcon />
              </span>
              <Link to="/adminpage/dashboard">Panel Principal</Link>
            </li>
            <li>
              <span className="dashboardIcon">
                <PersonIcon />
              </span>
              <Link to="/adminpage/register">Registrar Datos</Link>
            </li>
            <li>
              <span className="dashboardIcon">
                <BrowserUpdatedIcon />
              </span>
              <Link to="/adminpage/modify">Modificar Datos</Link>
            </li>
            <li>
              <span className="dashboardIcon">
                <ExitToAppIcon />
              </span>
              <Link to="/adminpage/logout">Cerrar Sesión</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default NavBar;
