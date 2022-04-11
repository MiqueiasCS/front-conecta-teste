import { createContext, useEffect, useState } from "react";
import api from "../services/api";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    let logged = localStorage.getItem("@user");
    return logged ? true : false;
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((e) => console.log(e.response));
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, users, setUsers }}>
      {children}
    </AuthContext.Provider>
  );
};
