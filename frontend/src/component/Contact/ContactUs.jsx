import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactUs = () => {
  return (
    <>
      <div
        className="contact"
        style={{ paddingLeft: "500px", justifyContent: "center" }}
      >
        <h1>Contact Us:</h1>
        <p>
          <LocationOnIcon />
          <b>Address: </b> 28 kilo, Dhulikhel, Kavre
        </p>

        <p>
          <MailIcon />
          <b>Email: </b> chaudariaditya@gmail.com
        </p>
        <p>
          <CallIcon />
          <b>Call Us: </b> 9832423423
        </p>
        <h2>You can also contact us from here:</h2>
        <a href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/home">
          <TwitterIcon />
        </a>
      </div>
    </>
  );
};

export default ContactUs;
