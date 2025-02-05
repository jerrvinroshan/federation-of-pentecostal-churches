import { Link } from "react-router-dom";

import logo from "../assets/image/logo.svg";
import facebookIcon from "../assets/icons/facebookIcon.svg";
import twitterIcon from "../assets/icons/twitterIcon.svg";
import instagramIcon from "../assets/icons/instagramIcon.svg";

export const Footer = () => {
  return (
    <>
      <footer className="Footer__BgColor">
        <div className="Footer__Container">
          <div className="Footer__ContentContainer">
            <Link className="Footer--Link" to="/">
              <img src={logo} alt="Federation of pentecostal churches Logo" />
            </Link>
            <div className="FooterMenu__Container">
              <h3 className="Footer--h3">Quick Menu</h3>
              <ul className="Footer--ul">
                <li>
                  <Link className="Footer--Link" to="/about-us">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="Footer--Link" to="/ministries">
                    Ministries
                  </Link>
                </li>
                <li>
                  <Link className="Footer--Link" to="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="Footer--Link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="Footer--Link" to="/contact-us">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="FooterMenu__Container">
              <h3 className="Footer--h3">Our</h3>
              <ul className="Footer--ul">
                <li>
                  <Link className="Footer--Link" to="/zones">
                    Zones
                  </Link>
                </li>
                <li>
                  <Link className="Footer--Link" to="/commissions">
                    Commissions
                  </Link>
                </li>
                <li>
                  <Link className="Footer--Link" to="/departments">
                    Departments
                  </Link>
                </li>
                <li>
                  <Link className="Footer--Link" to="/councils">
                    Councils
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Footer__SocialContainer">
              <h3 className="Footer--h3">Follow us on</h3>
              <ul className="Footer__Social--ul">
                <li>
                  <Link
                    className="Footer--Link"
                    to="https://facebook.com"
                    target="_blank"
                  >
                    <img
                      src={facebookIcon}
                      alt="Federation of pentecostal churches Facebook"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="Footer--Link"
                    to="https://twitter.com"
                    target="_blank"
                  >
                    <img
                      src={twitterIcon}
                      alt="Federation of pentecostal churches Twitter"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="Footer--Link"
                    to="https://instagram.com"
                    target="_blank"
                  >
                    <img
                      src={instagramIcon}
                      alt="Federation of pentecostal churches Instagram"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <hr />
            <p className="copyright--p">
              Copyright 2024 Federation of Pentecostal Churches
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
