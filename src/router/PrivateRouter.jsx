/* eslint-disable react/prop-types */
import { useContext, useMemo } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = useMemo(() => pathname + search, [pathname, search]);
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
