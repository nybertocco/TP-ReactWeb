import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to="/signin" />;
}
