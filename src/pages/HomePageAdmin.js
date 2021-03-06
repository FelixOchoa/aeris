import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import Register from "./Register";
import NotFound from "./NotFound";
import Teachers from "./Teachers";
import ProfileEdit from "./ProfileEdit";
import Students from "./Students";

const HomePageAdmin = () => {
  return (
    <div className="homepageContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/editprofile" element={<ProfileEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default HomePageAdmin;
