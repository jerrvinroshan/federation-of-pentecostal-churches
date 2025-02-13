import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/style.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import logo from "../assets/image/logo.svg";
import phoneIcon from "../assets/icons/phonecall.svg";

// Menu Navbar
export const MenuNavbar = () => {
  return (
    <nav className="MenuNavBar__bg">
      <div className="MenuNavBar__Container">
        <NavLink
          activeClassName="active"
          exact
          to="/"
          className="MenuNavBar--a"
        >
          Home
        </NavLink>
        <NavLink to="/about-us" className="MenuNavBar--a">
          About us
        </NavLink>
        <NavLink to="/ministries" className="MenuNavBar--a">
          Ministries
        </NavLink>
        <NavLink to="/events" className="MenuNavBar--a">
          Events
        </NavLink>
        <NavLink to="/zones" className="MenuNavBar--a">
          Zones
        </NavLink>
        <NavLink to="/departments" className="MenuNavBar--a">
          Departments
        </NavLink>
        <NavLink to="/councils" className="MenuNavBar--a">
          Councils
        </NavLink>
        <NavLink to="/commissions" className="MenuNavBar--a">
          Commissions
        </NavLink>
        <NavLink to="/gallery" className="MenuNavBar--a">
          Gallery
        </NavLink>
        <NavLink to="/contact-us" className="MenuNavBar--a">
          Contact us
        </NavLink>
      </div>
    </nav>
  );
};

export const MobileMenuNavBar = () => {
  const [clickIcon, setClickIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setClickIcon(!clickIcon);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="MobileMenuBar__Container">
      <div className="MobileMenuBar__ContentContainer">
        <div className="MobileMenuBar__LogoContainer">
          <img className="MobileMenuBar__Img" src={logo} />
          <div
            onClick={() => {
              handleClick();
            }}
          >
            {clickIcon ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <div
          className={`MobileMenu__LinkContainer ${isMenuOpen ? "active" : ""}`}
        >
          <NavLink
            activeClassName="active"
            exact
            to="/"
            className="MenuNavBar--a MobileMenuNavBar--a"
          >
            Home
          </NavLink>
          <NavLink to="/about-us" className="MenuNavBar--a MobileMenuNavBar--a">
            About us
          </NavLink>
          <NavLink
            to="/ministries"
            className="MenuNavBar--a MobileMenuNavBar--a"
          >
            Ministries
          </NavLink>
          <NavLink to="/events" className="MenuNavBar--a MobileMenuNavBar--a">
            Events
          </NavLink>
          <NavLink to="/zones" className="MenuNavBar--a MobileMenuNavBar--a">
            Zones
          </NavLink>
          <NavLink
            to="/departments"
            className="MenuNavBar--a MobileMenuNavBar--a"
          >
            Departments
          </NavLink>
          <NavLink to="/councils" className="MenuNavBar--a MobileMenuNavBar--a">
            Councils
          </NavLink>
          <NavLink
            to="/commissions"
            className="MenuNavBar--a MobileMenuNavBar--a"
          >
            Commissions
          </NavLink>
          <NavLink to="/gallery" className="MenuNavBar--a MobileMenuNavBar--a">
            Gallery
          </NavLink>
          <NavLink
            to="/contact-us"
            className="MenuNavBar--a MobileMenuNavBar--a"
          >
            Contact us
          </NavLink>
          <Link
            to="tel:+91896587845"
            className="MenuNavBar--a MobileMenuNavBar--a"
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <LocalPhoneIcon fontSize="small" />
            896587845
          </Link>
          <Link
            to="mailto:smaple@mail.com"
            className="MenuNavBar--a MobileMenuNavBar--a"
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <EmailIcon fontSize="small" />
            smaple@mail.com
          </Link>
        </div>
      </div>
    </nav>
  );
};
