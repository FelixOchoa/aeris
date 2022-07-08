import React from "react";

export const HeaderProfile = () => {
  return (
    <div className="profileHeader">
      <img
        src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="
        alt=""
      />
      <div className="detailProfile">
        <h1>Información del perfil</h1>
        <h3>Actualiza tu foto y tu información personal</h3>
      </div>
      <div className="buttonProfile">
        <button className="cancelButton">Cancelar</button>
        <button className="saveButton">Guardar</button>
      </div>
    </div>
  );
};
