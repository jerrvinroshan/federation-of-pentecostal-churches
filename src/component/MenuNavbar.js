import { NavLink } from "react-router-dom";
import "../assets/style.css";

// Menu Navbar
export const MenuNavbar = () => {
  return (
    <nav className="MenuNavBar__bg">
      <div className="MenuNavBar__Container">
        <NavLink activeClassName="active" exact to='/' className="MenuNavBar--a">
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
        <NavLink to='/zones' className="MenuNavBar--a">
          Zones
        </NavLink>
        <NavLink to='/departments' className="MenuNavBar--a">
          Departments
        </NavLink>
        <NavLink to='/councils' className="MenuNavBar--a">
          Councils
        </NavLink>
        <NavLink to='/commissions' className="MenuNavBar--a">
          Commissions
        </NavLink>
        <NavLink to='gallery' className="MenuNavBar--a">
          Gallery
        </NavLink>
        <NavLink to='contact-us' className="MenuNavBar--a">
          Contact us
        </NavLink>
      </div>
    </nav>
  );
};
