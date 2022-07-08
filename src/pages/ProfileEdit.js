import React from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import { HeaderProfile } from "../components/ProfileEdit/HeaderProfile";
import "../css/editprofile.css";

const ProfileEdit = () => {
  const location = useLocation();
  const { state } = location;
  if (!state) {
    return <NotFound />;
  }
  return (
    <div className="profileBody">
      <HeaderProfile></HeaderProfile>
      <form className="profileContent">
        <div className="inputText">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" defaultValue={state.nombres} />
        </div>
        <hr />
        <div className="inputText">
          <label htmlFor="name">Apellidos</label>
          <input type="text" id="name" defaultValue={state.apellidos} />
        </div>
        <hr />
        <div className="inputText">
          <label htmlFor="name">Edad</label>
          <input type="text" id="name" defaultValue={state.edad} />
        </div>
        <hr />
        <div className="inputText">
          <label htmlFor="name">Identificación</label>
          <input type="text" id="name" defaultValue={state.identificacion} />
        </div>
        <hr />
        <div className="inputText">
          <label htmlFor="name">Foto</label>
          <input type="text" id="name" defaultValue={state.foto} />
        </div>
        <hr />
      </form>
    </div>
  );
};

export default ProfileEdit;
