import React from "react";
import { Typography } from "@mui/material";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <React.Fragment>
      <Appbar />
      <div className="container footer-link-container">
        <div className="footer-link-content">
          <Typography variant="h4" sx={{ mb: "1.5rem", fontWeight: "bold" }}>
            Privacy Policy
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            At Seven Shows, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and disclose personal
            information about you when you use our website. By using Seven
            Shows, you consent to the terms of this Privacy Policy.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            1. Information We Collect
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            When you create an account on Seven Shows, we collect personal
            information such as your name, email address, and password. We may
            also collect information about your use of the website, such as the
            movies and TV shows you have added to your list.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            2. How We Use Your Information
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            We use your personal information to provide and improve our website
            and services, to personalize your experience on our website, and to
            communicate with you about your account and other relevant
            information. We may also use your information to analyze and improve
            the effectiveness of our website and services.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            <strong>3. Disclosure of Your Information</strong>
          </Typography>
          <Typography paragraph>
            We do not share your personal information with third parties except
            in the following limited circumstances:
          </Typography>
          <ul style={{ marginBottom: "1.5rem", marginLeft: "2rem" }}>
            <li>With your consent or at your direction;</li>
            <li>
              To comply with applicable law, regulation, legal process, or
              governmental request;
            </li>
            <li>To enforce our Terms of Service;</li>
            <li>
              To protect our rights or property, or the safety or security of
              ourselves or others; or
            </li>
            <li>
              In connection with a merger, acquisition, or sale of all or a
              portion of our assets.
            </li>
          </ul>

          <Typography paragraph sx={{ fontWeight: "bold" }}>
            4. Data Security
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            We take reasonable measures to protect your personal information
            from loss, misuse, unauthorized access, disclosure, alteration, and
            destruction. However, no security system is completely secure, and
            we cannot guarantee the absolute security of your information.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            5. Data Retention
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            We take reasonable measures to protect your personal information
            from loss, misuse, unauthorized access, disclosure, alteration, and
            destruction. However, no security system is completely secure, and
            we cannot guarantee the absolute security of your information.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            6. Your Rights
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            You may have certain rights regarding your personal information,
            including the right to access, correct, or delete your personal
            information. If you would like to exercise any of these rights,
            please contact us.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            7. Changes to this Privacy Policy
          </Typography>
          <Typography paragraph sx={{ mb: "1.5rem" }}>
            Seven Shows reserves the right to modify or revise this Privacy
            Policy at any time, and any such modifications or revisions shall be
            effective immediately upon posting. Your continued use of our
            website after any such changes will constitute your acceptance of
            the revised Privacy Policy.
          </Typography>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
