import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="image-menubar">
              <Link to="/" className="image">
                <img
                  src="https://res.cloudinary.com/abidazad/image/upload/v1644678584/icon/Solid_uo4lnz_gydtiu.svg"
                  alt=""
                />
                <h1>azad</h1>
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
