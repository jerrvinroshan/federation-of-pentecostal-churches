import { NavLink } from "react-router-dom";
import "../assets/style.css";

// Menu Navbar
export const MenuNavbar = () => {
  return (
    <nav className="MenuNavBar__bg">
      <div className="MenuNavBar__Container">
        <a exact to='/' className="MenuNavBar--a active" href="#">
          Home
        </a>
        <a className="MenuNavBar--a" href="#">
          About us
        </a>
        <a className="MenuNavBar--a" href="#">
          Ministries
        </a>
        <a className="MenuNavBar--a" href="#">
          Events
        </a>
        <a className="MenuNavBar--a" href="#">
          Zones
        </a>
        <a className="MenuNavBar--a" href="#">
          Departments
        </a>
        <a className="MenuNavBar--a" href="#">
          Councils
        </a>
        <a className="MenuNavBar--a" href="#">
          Gallery
        </a>
        <a className="MenuNavBar--a" href="#">
          Contact us
        </a>
      </div>
    </nav>
  );
};
