import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Logo from "../../public/assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <Container>
        <div className="footer-container">
          <div className="left-footer-container">
            <img
              src={Logo}
              alt="Logo"
              className="logo"
              onClick={() => navigate("/home")}
            />
            <Box>
              <Typography variant="body2">
                © 2023 SevenShows. All Rights Reserved.
              </Typography>
              <Typography variant="body2">
                Property of Simon James Villarin, Andrei San Miguel, Leo Cruz.
              </Typography>
            </Box>
          </div>
          <div className="right-footer-container">
            <Typography paragraph sx={{ mb: 0 }}>
              SevenShows allows you to discover your next binge-worthy shows.
              Add shows to your list and stay up-to-date with the latest
              releases, as we provide comprehensive information about movies and
              TV shows.
            </Typography>
            <Box className="footer-links">
              <div className="footer-link" onClick={() => navigate("/terms")}>
                Terms of Service
              </div>
              <div>&nbsp;-&nbsp;</div>
              <div
                className="footer-link"
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </div>
              <div>&nbsp;-&nbsp;</div>
              <div className="footer-link" onClick={() => navigate("/contact")}>
                Contact Us
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
