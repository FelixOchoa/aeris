import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { links } from "../components/NavBar/NavBarStruct";

const NavBar = () => {
  return (
    <div className="navBarBody">
      <div className="logoSection">
        <h3>Aeris Software</h3>
      </div>
      <div className="navSection">
        <nav className="menu">
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="profileSection">
        <a>
          <SettingsIcon fontSize="small"></SettingsIcon>
        </a>
        <span className="sidebarUserName">
          <p>Hola, Felix</p>
        </span>
        <img src="https://pbs.twimg.com/profile_images/1512484281460957185/fUxCPt0a_400x400.jpg" />
      </div>
    </div>
  );
};

export default NavBar;
