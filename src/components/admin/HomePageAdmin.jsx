import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import Register from "./Register";
import RegisterStudent from "./RegisterStudent";
import RegisterTeacher from "./RegisterTeacher";

const HomePageAdmin = () => {
  return (
    <div className="homepageContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/student" element={<RegisterStudent />} />
        <Route path="/register/teacher" element={<RegisterTeacher />} />
      </Routes>
    </div>
  );
};

export default HomePageAdmin;
