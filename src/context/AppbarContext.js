import React, { createContext, useState } from "react";

export const AppbarContext = createContext();

export const AppbarContextProvider = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <AppbarContext.Provider
      value={{
        showMobileNav,
        setShowMobileNav,
        showMobileSearch,
        setShowMobileSearch,
        showDropdown,
        setShowDropdown,
        search,
        setSearch,
        location,
        setLocation,
      }}
    >
      {children}
    </AppbarContext.Provider>
  );
};
