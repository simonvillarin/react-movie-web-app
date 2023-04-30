import { Typography } from "@mui/material";
import React from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <React.Fragment>
      <Appbar />
      <div className="container footer-link-container">
        <div className="footer-link-content">
          <Typography variant="h4" sx={{ mb: "1.5rem", fontWeight: "bold" }}>
            Terms and Conditions
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            Welcome to Seven Shows, a website where you can create a personal
            list of movies and TV series and view information about them. By
            using this website, you agree to the following terms and conditions:
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            By using Seven Shows, you agree to be bound by these Terms of
            Service. If you do not agree to these Terms of Service, you may not
            use the website. These Terms of Service may be revised or updated
            from time to time, and it is your responsibility to check for
            changes.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            2. User Conduct
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            You agree to use Seven Shows only for lawful purposes and in
            accordance with these Terms of Service. You must not use the website
            in any way that causes, or may cause, damage to the website or
            impair its availability or accessibility. You must not use the
            website to copy, store, host, transmit, send, use, publish, or
            distribute any material that consists of (or is linked to) spyware,
            computer viruses, or any other malicious code.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            <strong>3. Content</strong>
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            You may view information about movies and TV series on Seven Shows.
            The website does not allow for the sharing of information with other
            users or the uploading of any content by users.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            4. User Accounts
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            To use Seven Shows, you must create a user account. You agree to
            provide accurate and complete information when creating your
            account, and to keep your account information up-to-date. You are
            solely responsible for the activity that occurs on your account, and
            you must keep your login credentials secure.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            5. Limitation of Liability
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            Seven Shows shall not be liable to you or any third party for any
            damages, including but not limited to direct, indirect, incidental,
            special, punitive, or consequential damages, arising out of or in
            connection with your use of Seven Shows. This limitation of
            liability applies regardless of the cause of action or legal theory,
            whether in contract, tort, negligence, or otherwise.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            6. Changes to Terms of Service
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            Seven Shows reserves the right to modify or revise these Terms of
            Service at any time, and your continued use of the website after any
            such modifications or revisions shall be deemed acceptance of these
            changes.
          </Typography>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Terms;
