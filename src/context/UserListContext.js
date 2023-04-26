import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserListById } from "../services/UserListService";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const UserListContext = createContext();

export const UserListProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const { userData, isUserLoggedIn, setIsUserLoggedIn } =
    useContext(UserContext);
  const navigate = useNavigate();

  let location = localStorage.getItem("location");

  const handleAxiosError = () => {
    let user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
    }
    localStorage.getItem("location");
    if (location) {
      localStorage.removeItem("location");
    }
    setIsUserLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    getUserListById(userData.id, userData.token)
      .then((res) => {
        setUserList(res.data.reverse());
      })
      .catch((err) => handleAxiosError());
  }, [location]);

  return (
    <UserListContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserListContext.Provider>
  );
};
