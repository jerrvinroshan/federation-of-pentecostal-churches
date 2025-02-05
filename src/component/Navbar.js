import logo from "../assets/image/logo.svg";
import callIcon from "../assets/icons/phonecall.svg";
import mailIcon from "../assets/icons/mail.svg";
import "../assets/style.css";
import { NavLink } from "react-router-dom";

// Logo Navbar
export const Navbar = () => {
  return (
    <>
      <div className="LogoNavBar__Container">
        <NavLink activeClassName="active" to='/' className="LogoNavBar--a">
          <img src={logo} alt="Federation of Pentecostal Churches" />
        </NavLink>
        <ul className="Contact_container">
          <li className="Contact_List">
            <a className="LogoNavBar--a" href="tel:+919587458741">
              <img src={callIcon} alt="phoneicon" />
              <p>+91 95874 58741</p>
            </a>
          </li>
          <li className="Contact_List">
            <a className="LogoNavBar--a" href="mailto:smaple@mail.com">
              <img src={mailIcon} alt="mailicon" />
              <p>sample@mail.com</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};


