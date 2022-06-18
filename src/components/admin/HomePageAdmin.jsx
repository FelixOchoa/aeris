import React from "react";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

const HomePageAdmin = () => {
  return (
    <div className="homepageContainer">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default HomePageAdmin;
