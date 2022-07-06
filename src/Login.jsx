import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  // const url = "https://reqres.in/api/login";
  const onSubmit = (data) => {
    navigate("/adminpage");
  };
  // const onSubmit = async (info) => {
  //   try {
  //     const resp = await axios.post(url, info);
  //     console.log(resp.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="loginBody">
      <div className="imageContainer">
        <a href="#">Aeris Software</a>
      </div>
      <div className="loginContainer">
        <h1>Bienvenido de Nuevo</h1>
        <h3>Por favor, ingrese sus datos.</h3>
        <form action="" className="formLogin">
          <label htmlFor="">Nombre de Usuario</label>
          <input
            className="text"
            type="email"
            name=""
            placeholder="Escribe tu nombre de usuario"
          />
          <label htmlFor="">Contraseña</label>
          <input
            className="text"
            type="password"
            name=""
            placeholder="·······"
          />
          <div className="formSection">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Recordarme</label>
            <a className="forgot" htmlFor="">
              ¿Olvidaste tu Contraseña?{" "}
            </a>
          </div>
          <input className="button" type="button" value="Iniciar Sesión" />
        </form>
      </div>
    </div>
  );
};

export default Login;
