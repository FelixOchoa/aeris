import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "../css/login.css";

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
    <div className="login">
      <div className="loginLogo">
        <img src="https://i.imgur.com/KzIJpu4.jpeg" alt="logo" />
        <div className="loginContainer">
          <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <label className="loginLabel" htmlFor="label-email">
              Correo electrónico
            </label>
            <input
              className="loginInput"
              type="text"
              name="email"
              {...register("email")}
              placeholder="Escribe tu correo..."
            />
            <label className="loginLabel" htmlFor="label-passwordpassword">
              Contraseña
            </label>
            <input
              className="loginInput"
              type="password"
              name="password"
              {...register("password")}
              placeholder="Escribe tu contraseña..."
            />
            <span className="loginSpan">
              <a href="/register">¿Olvidaste tu contraseña?</a>
            </span>
            <button className="loginButton" type="submit">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
