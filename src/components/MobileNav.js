import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppbarContext } from "../context/AppbarContext";

const navLinks = [
  {
    name: "HOME",
    to: "/home",
  },
  {
    name: "MOVIES",
    to: "/movies",
  },
  {
    name: "TV SERIES",
    to: "/series",
  },
  {
    name: "MY LIST",
    to: "/list",
  },
];

const MobileNav = () => {
  const { showMobileNav, setShowMobileNav, setShowMobileSearch } =
    useContext(AppbarContext);
  const navigate = useNavigate();
  return (
    <Box className={`mobile-nav  ${showMobileNav && "mobile-nav-open"}`}>
      <Box
        className={`mobile-nav-links ${
          !showMobileNav && "mobile-nav-links-close"
        }`}
      >
        {navLinks.map((link, index) => (
          <Typography
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setShowMobileNav(false);
              setShowMobileSearch(false);
              navigate(link.to);
              window.scroll(0, 0);
            }}
          >
            {link.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default MobileNav;
