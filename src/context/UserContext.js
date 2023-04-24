import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    id: 0,
    token: "",
    firstName: "",
    lastName: "",
  });

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
