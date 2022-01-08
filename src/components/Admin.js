import React from "react";
import "../assets/css/Sidebar.css";
import Navbar from './Navbar'

function Nav() {
  return (
    <div className="body main">
      <Navbar />

      {/* Content*/}
      <main className="mt-5 pt-3">
        <div className="container">
          <strong>Dashboard</strong>
          <hr />
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card bg-primary text-white h-100">
                <div className="card-body py-5">Primary Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-warning text-dark h-100">
                <div className="card-body py-5">Warning Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-success text-white h-100">
                <div className="card-body py-5">Success Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-danger text-white h-100">
                <div className="card-body py-5">Danger Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </main>
    </div>
  );
}

export default Nav;
