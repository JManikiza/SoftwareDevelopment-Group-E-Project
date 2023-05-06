import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({  children }) => {
  let isAuthenticated = sessionStorage.getItem("session_token") !== null;
  

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
