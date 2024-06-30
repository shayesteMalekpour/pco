import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return isAuthenticated ? <Component /> : <Navigate to="/signup" />;
};
export default PrivateRoute;
