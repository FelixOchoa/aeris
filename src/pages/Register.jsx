import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Alerta from "../Alerts";
import "../css/register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const url = "https://aeris.azurewebsites.net/api/User/register-users";

  const onSubmit = async (info) => {
    try {
      const response = await axios.post(url, info);
      const { rol } = response.data;
      if (response.status === 200) {
        Alerta(`success`, `Se pudo registrar al ${rol} con éxito`);
        document.getElementsByClassName("registerForm")[0].reset();
      }
    } catch (error) {
      Alerta(`error`, `Ocurrió un error al registrar el usuario.`);
    }
  };

  return (
    <div className="registerBody">
      <h1>Crear un nuevo usuario</h1>
      <p>Puede registrar un Docente o un Estudiante.</p>

      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroupRow">
          <div className="inputText">
            <label htmlFor="name">Nombre</label>
            <input type="text" placeholder="" {...register("nombre")} />
          </div>
          <div className="inputText">
            <label htmlFor="name">Apellidos</label>
            <input type="text" placeholder="" {...register("apellidos")} />
          </div>
        </div>
        <div className="formGroupColumn">
          <div className="inputText">
            <label htmlFor="name">Identificación</label>
            <input type="number" {...register("identificacion")} />
          </div>
          <div className="inputText">
            <label htmlFor="name">Nombre de Usuario</label>
            <input type="text" {...register("username")} />
          </div>
          <div className="inputText">
            <label htmlFor="name">Contraseña</label>
            <input type="password" {...register("password")} />
          </div>
        </div>
        <div className="formGroupRow">
          <div className="inputText">
            <label htmlFor="name">Tipo de Usuario</label>
            <select
              name="selectText"
              className="selectText"
              id="selectTypeUser"
              {...register("rol")}
            >
              <option value="Estudiante">Estudiante</option>
              <option value="Docente">Docente</option>
            </select>
          </div>
          <div className="inputText">
            <label htmlFor="name">Edad</label>
            <input type="number" {...register("edad")} />
          </div>
        </div>
        <input value="Crear usuario" type="submit" className="inputButton" />
      </form>
    </div>
  );
};

export default Register;
