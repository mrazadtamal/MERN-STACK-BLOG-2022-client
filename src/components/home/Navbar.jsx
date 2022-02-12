import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="image-menubar">
              <Link></Link>
            </div>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
