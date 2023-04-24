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

  const handleAxiosError = () => {
    let user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
    }
    setIsUserLoggedIn(false);
    window.location.reload();
  };

  useEffect(() => {
    getUserListById(userData.id, userData.token)
      .then((res) => {
        setUserList(res.data.reverse());
      })
      .catch((err) => handleAxiosError());
  }, [isUserLoggedIn]);

  return (
    <UserListContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserListContext.Provider>
  );
};
