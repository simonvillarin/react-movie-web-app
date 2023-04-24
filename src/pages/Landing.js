import React, { useContext } from "react";
import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";
import { FaSearch, FaCalendarCheck, FaListAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LandingImg from "../../public/assets/images/landing-img.png";
import Logo from "../../public/assets/images/logo.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Container>
            <Box className="nav">
              <img src={Logo} className="logo" />
              <Box className="landing-right-nav">
                <div onClick={() => navigate("/signup")}>Sign Up</div>
                <div>|</div>
                <div onClick={() => navigate("/login")}>Login</div>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <section className="colored-section">
        <Container>
          <Box className="hero-container">
            <Box className="hero-content">
              <h2>Find your next favorite flick with just a click!</h2>
            </Box>
            <img src={LandingImg} alt="Hero Image" className="landing-img" />
          </Box>
        </Container>
      </section>

      <section className="featured">
        <Container>
          <Box className="featured-container">
            <Box className="featured-content">
              <FaSearch className="featured-icon" />
              <Typography className="featured-text" variant="h4">
                Discover
              </Typography>
              <Typography style={{ color: "#8f8f8f" }}>
                Discover your next favorite show with our website's vast
                collection.
              </Typography>
            </Box>
            <Box className="featured-content">
              <FaCalendarCheck className="featured-icon" />
              <Typography className="featured-text" variant="h4">
                Updated
              </Typography>
              <Typography style={{ color: "#8f8f8f" }}>
                Get the latest blockbuster hits and timeless classics, always
                up-to-date.
              </Typography>
            </Box>
            <Box className="featured-content">
              <FaListAlt className="featured-icon" />
              <Typography className="featured-text" variant="h4">
                Favorites
              </Typography>
              <Box>
                <Typography style={{ color: "#8f8f8f" }}>
                  Never miss a movie again - easily keep tabs on all your
                  favorite films by adding them to your list
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Landing;
