import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../Assets/logo.jpg";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <>
      <div className="DesktopNav_container">
        <div className="DesktopNavLeft_container">
          <Link to="/">
            <img src={logo} alt="Company logo" className="logo" />
          </Link>

          <Link
            to="/"
            style={{ textDecoration: "none", color: "black", padding: 40 }}
          >
            <a className="link">Home</a>
          </Link>
          <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
            <a className="link">About</a>
          </Link>
          <Link
            to="/Products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <a className="link">Products</a>
          </Link>
          <Link
            to="/User Rules"
            style={{ textDecoration: "none", color: "black" }}
          >
            <a className="link">User Rules</a>
          </Link>
          <Link
            to="/ContactUs"
            style={{ textDecoration: "none", color: "black" }}
          >
            <a className="link">Contact Us</a>
          </Link>
        </div>

        <div className="DesktopNavRight_container">
          {isAuthenticated && <UserOptions user={user} />}
          <Link to="/Search">
            <a className="search">
              <SearchIcon />
            </a>
          </Link>
          {/* <Link to="/Favourites">
            <a className="fav">
              <FavoriteBorderIcon />
            </a>
          </Link> */}
          <Link to="/Cart">
            <a className="Cart">
              <ShoppingCartIcon />
            </a>
          </Link>
          <Link to="/Login">
            <a className="Login/Register">
              <PersonIcon />
            </a>
          </Link>
        </div>
      </div>
      <div
        className="FooterBoarder"
        style={{ borderTop: ".3px solid rgba(21,21,21,0.5)" }}
      ></div>
    </>
  );
};
export default Navbar;
