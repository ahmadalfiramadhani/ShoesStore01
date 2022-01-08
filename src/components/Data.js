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
                <strong>DATA PEMBELI</strong>
              </li>
            </ol>
          </nav>
        </div>
      </main>
    </div>
  );
}

export default Nav;
