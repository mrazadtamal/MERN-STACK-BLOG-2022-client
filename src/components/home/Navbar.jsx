import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="image-menubar">
              <Link to="/" className="image">
                <img
                  src="https://res.cloudinary.com/abidazad/image/upload/v1644831779/icon/azad_logo_aybjfl.png"
                  alt=""
                />
                <h1>AZAD BLOG</h1>
                <label htmlFor="toggle">
                  <GiHamburgerMenu />
                </label>
              </Link>
            </div>
          </div>
          <div className="col-8">
            <ul className="link-list">
              <li className="link-item">
                <Link to="/about">about</Link>
              </li>
              <li className="link-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link-item">
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
