//rafce
import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../Assets/logo.jpg";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="FooterBoarder"
        style={{ borderTop: ".3px solid rgba(21,21,21,0.5)" }}
      ></div>
      <div className="Footer">
        <div className="footer1st">
          <img src={logo} style={{ width: "119px", cursor: "pointer" }} />
          <div className="Footer1">
            <p>
              <LocationOnIcon />
              <b>Address: </b> 28 kilo, Dhulikhel, Kavre
            </p>
          </div>
          <div className="Footer1">
            <p>
              <MailIcon />
              <b>Email: </b> chaudariaditya@gmail.com
            </p>
          </div>
          <div className="Footer1">
            <p>
              <CallIcon />
              <b>Call Us: </b> 9832423423
            </p>
          </div>

          <div className="Footer1">
            <p>
              <AccessTimeIcon />
              <b>Time: </b> 10:00 Am - 10:00 Pm (everyday)
            </p>
          </div>
        </div>
        <div className="footer2n3">
          {/* Footer 2nd part */}
          <div className="Footer2nd">
            <h2>Account</h2>
            <Link to="/login">
              <h4>Log In</h4>
            </Link>
            <Link to="/login">
              <h4>Registration</h4>
            </Link>
            <Link to="/password/forgot">
              <h4>Forgot Password</h4>
            </Link>
          </div>
          {/* Footer 3rd part */}
          <div className="Footer3rd">
            <h2>Follow Us</h2>
            <Link to="/faq">
              <h4>Facebook</h4>
            </Link>
            <Link to="/contact">
              <h4>Instagram</h4>
            </Link>
            <Link to="/about">
              <h4>Twitter</h4>
            </Link>
          </div>
          {/* Footer 4th part */}
          <div className="Footer4th">
            <h2>Rules</h2>
            <Link to="/faq">
              <h4>FAQ</h4>
            </Link>
            <Link to="/contact">
              <h4>contact us</h4>
            </Link>
            <Link to="/about">
              <h4>About us</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
