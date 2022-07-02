import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import Register from "./Register";
import NotFound from "./NotFound";

const HomePageAdmin = () => {
  return (
    <div className="homepageContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default HomePageAdmin;
