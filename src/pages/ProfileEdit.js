import React from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

const ProfileEdit = () => {
  const location = useLocation();
  const { state } = location;
  if (!state) {
    return <NotFound />;
  }
  return <div>ProfileEdit</div>;
};

export default ProfileEdit;
