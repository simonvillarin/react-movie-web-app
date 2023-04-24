import React from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AppbarContext } from "../context/AppbarContext";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const { showDropdown, setShowDropdown, setLocation } =
    useContext(AppbarContext);
  const navigate = useNavigate();

  const handleProfile = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    setShowDropdown(false);

    let user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
    }
    let loc = localStorage.getItem("location");
    if (loc) {
      localStorage.removeItem("location");
    }
    navigate("/");
  };

  return (
    <Box className={`dropdown-container ${!showDropdown && "dropdown-close"}`}>
      <Box className="dropdown-link" onClick={handleProfile}>
        Profile
      </Box>
      <Box className="dropdown-link" onClick={handleLogout}>
        Logout
      </Box>
    </Box>
  );
};

export default Dropdown;
