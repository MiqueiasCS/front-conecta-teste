import { createContext, useEffect, useMemo, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    let logged = localStorage.getItem("@user");
    return logged ? true : false;
  });
  const [users, setUsers] = useState([]);

  const findPatient = (id) => {
    let patient = users.find((user) => user.index === id);
    return patient;
  };

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((e) => console.log(e.response));
  }, []);

  const unattendedUsers = useMemo(() => {
    const newList = users.filter((user) => {
      return !user.attended;
    });
    return newList;
  }, [users]);

  const returndUsers = useMemo(() => {
    const returnUsersList = users.filter((user) => {
      return user.isReturn;
    });
    return returnUsersList;
  }, [users]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        users,
        setUsers,
        unattendedUsers,
        returndUsers,
        findPatient,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
