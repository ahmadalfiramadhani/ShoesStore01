import React from "react";
import "../assets/css/Sidebar.css";
import Navbar from "./Navbar";

function Nav() {
  return (
    <div className="body main">
      <Navbar />

      {/* Content*/}
      <main className="mt-5 pt-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                <strong>Products</strong>
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    alt="Adidas Detail"
                    height="120px"
                    width="250px"
                    src="https://www.transparentpng.com/thumb/adidas-logo/png-photo-adidas-logo-hd-6.png"
                  />
                </div>
                <a href="/">
                  <div
                    className="card-footer d-flex"
                    style={{ cursor: "pointer" }}
                  >
                    View Details
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    alt="Vans Detail"
                    height="120px"
                    width="238px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DCP-wyMlhgTms3FZgZ58Xi5Lds4aHZIy2g&usqp=CAU"
                  />
                </div>
                <a href="/">
                  <div
                    className="card-footer d-flex"
                    style={{ cursor: "pointer" }}
                  >
                    View Details
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    alt="Puma Detail"
                    height="120px"
                    width="238px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUaScBRr4QoERIzGLbRQMXchNefz6Ajx0nQ&usqp=CAU"
                  />
                </div>
                <a href="/">
                  <div
                    className="card-footer d-flex"
                    style={{ cursor: "pointer" }}
                  >
                    View Details
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* superga */}
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ marginLeft: "-10px" }}
                    alt="Piero Detail"
                    height="120px"
                    width="248px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgSrKfr_ywl0WjpncSY4asVwkL84wsxRH1d7il4wU5cL_qVs95UoQUsEGEg1MysweLIA&usqp=CAU"
                  />
                </div>
                <a href="/">
                  <div
                    className="card-footer d-flex"
                    style={{ cursor: "pointer" }}
                  >
                    View Details
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* piero */}
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ marginLeft: "-15px" }}
                    alt="Superga Detail"
                    height="120px"
                    width="250px"
                    src="https://logodix.com/logo/1832706.jpg"
                  />
                </div>
                <a href="/">
                  <div
                    className="card-footer d-flex"
                    style={{ cursor: "pointer" }}
                  >
                    View Details
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Nav;
