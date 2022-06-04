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
              <h1>col 8 </h1>
            </div>
            {/* col-4 */}
            <div className="col-4">
              <div className="search-category-tag">
                <div className="search">
                  <h2>Search</h2>
                  <div className="form-group">
                    <input
                      // onChange={(e) => setvalue(e.target.value)}
                      className="form-control"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      //  onClick={search}

                      className="btn btn-block"
                    >
                      Search
                    </button>
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
