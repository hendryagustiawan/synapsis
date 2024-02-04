import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg pt-3 text-white`} style={{ backgroundColor: "#0EA5E9" }}>
      <div className="container">
        <Link className={`navbar-brand fs-4 fw-bold text-white `} style={{ letterSpacing: "5px" }} to="/">
          GOREST
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <ul className="navbar-nav ms-md-5">
              <li className="nav-item mx-1" style={{ fontSize: "14px", letterSpacing: "3px" }}>
                <Link className={`nav-link text-dark text-white fs-6 fw-semibold `} to="/">
                  POST
                </Link>
              </li>
              <li className="nav-item mx-1" style={{ fontSize: "14px", letterSpacing: "3px" }}>
                <Link className={`nav-link text-dark fw-semibold text-white fs-6 `} to="/user">
                  USER
                </Link>
              </li>
              <li className="nav-item mx-1" style={{ fontSize: "14px", letterSpacing: "3px" }}>
                <Link className={`nav-link text-dark fw-semibold text-white fs-6 `}>FAVORITE</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}
