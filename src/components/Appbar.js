import React, { useContext } from "react";
import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";
import { SlUser, SlMagnifier, SlMenu, SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { AppbarContext } from "../context/AppbarContext";
import Search from "./Search";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";
import Dropdown from "./Dropdown";
import Logo from "../../public/assets/images/logo.png";

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

const Appbar = () => {
  const {
    showMobileNav,
    setShowMobileNav,
    showMobileSearch,
    setShowMobileSearch,
    showDropdown,
    setShowDropdown,
    setSearch,
  } = useContext(AppbarContext);
  const navigate = useNavigate();

  return (
    <AppBar elevation={0} sx={{ color: "#f3f3f3" }}>
      <Toolbar>
        <Container>
          <Box className="nav">
            <MobileNav />
            <MobileSearch />
            <Box className="menu-icon">
              {!showMobileNav ? (
                <SlMenu
                  onClick={() => {
                    setShowMobileNav(true);
                    setShowMobileSearch(false);
                    setShowDropdown(false);
                    setSearch("");
                  }}
                />
              ) : (
                <SlClose
                  id="close-icon"
                  onClick={() => setShowMobileNav(false)}
                />
              )}
            </Box>
            <Box className="left-nav">
              <img
                src={Logo}
                alt="Logo"
                className="logo"
                onClick={() => {
                  setSearch("");
                  setShowDropdown(false);
                  navigate("/home");
                  window.scroll(0, 0);
                }}
              />
              <Box className="nav-links">
                {navLinks.map((link, index) => (
                  <Typography
                    key={index}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSearch("");
                      setShowDropdown(false);
                      navigate(link.to);
                      window.scroll(0, 0);
                    }}
                  >
                    {link.name}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box className="right-nav">
              <Search />
              <Box
                className="profile"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                  setShowMobileNav(false);
                  setShowMobileSearch(false);
                  setSearch("");
                }}
              >
                <SlUser style={{ cursor: "pointer" }} />
                <Dropdown />
              </Box>
            </Box>
            <Box className="nav-icons">
              <SlMagnifier
                onClick={() => {
                  setShowMobileSearch(!showMobileSearch);
                  setShowMobileNav(false);
                  setShowDropdown(false);
                  setSearch("");
                }}
              />
              <Box className="profile-icon-container">
                <SlUser
                  onClick={() => {
                    setShowDropdown(!showDropdown);
                    setShowMobileNav(false);
                    setShowMobileSearch(false);
                    setSearch("");
                  }}
                />
                <Dropdown />
              </Box>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
