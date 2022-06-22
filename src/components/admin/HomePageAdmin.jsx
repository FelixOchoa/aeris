import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

const HomePageAdmin = () => {
  return (
    <div className="homepageContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default HomePageAdmin;
