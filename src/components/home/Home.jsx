import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="row">
            {/* col - 8  */}
            <div className="col-8">
              ----------- ----- ----------- col 8 ------------ -------
            </div>
            {/* col-4 */}
            <div className="col-4">
              <div className="search-category-tag">
                <div className="search">
                  <h1>Search</h1>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search"
                    />
                    <button className="btn btn-block">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
