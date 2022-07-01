import React from "react";
import "../../css/register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Alerta from "../Alerts";

const RegisterTeacher = () => {
  const { register, handleSubmit } = useForm();
  const url = "https://aeris.azurewebsites.net/api/User/register-users";

  const onSubmit = async (info) => {
    try {
      const response = await axios.post(url, info);
      const { rol } = response.data;
      if (response.status === 200) {
        Alerta(`success`, `Se pudo registrar al ${rol} con éxito`);
        document.getElementsByClassName("teacherForm")[0].reset();
      }
    } catch (error) {
      Alerta(`error`, `Ocurrió un error al registrar al docente`);
    }
  };
  return (
    <div className="registerStudentContainer">
      <h1>Registro de Docente</h1>
      <div className="registerStudentForm">
        <form className="teacherForm" onSubmit={handleSubmit(onSubmit)}>
          <label className="studentLabel" htmlFor="label-name">
            Nombre
          </label>
          <input
            className="studentInput"
            type="text"
            name="name"
            {...register("nombres")}
            placeholder="Escribe tu nombre..."
          />
          <label className="studentLabel" htmlFor="label-lastname">
            Apellidos
          </label>
          <input
            className="studentInput"
            type="text"
            name="lastname"
            {...register("apellidos")}
            placeholder="Escribe tus apellidos..."
          />
          <label className="studentLabel" htmlFor="label-id">
            Número de Identificación
          </label>
          <input
            className="studentInput"
            type="text"
            name="id"
            {...register("identificacion")}
            placeholder="Escribe tu identificación..."
          />
          <label className="studentLabel" htmlFor="label-username">
            Nombre de Usuario
          </label>
          <input
            className="studentInput"
            type="text"
            name="username"
            {...register("username")}
            placeholder="Escribe tu nombre de usuario..."
          />
          <label className="studentLabel" htmlFor="label-password">
            Contraseña
          </label>
          <input
            className="studentInput"
            type="password"
            name="password"
            {...register("password")}
            placeholder="Escribe tu contraseña..."
          />
          <label className="studentLabel" htmlFor="label-role">
            Tipo de usuario
          </label>
          <input
            className="studentInput"
            type="text"
            name="username"
            {...register("rol")}
            value="Docente"
          />
          <label className="studentLabel" htmlFor="label-age">
            Edad
          </label>
          <input
            className="studentInput"
            type="text"
            name="edad"
            {...register("edad")}
            placeholder="Escribe tu edad..."
          />
          <button className="studentButton" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTeacher;
