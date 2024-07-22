import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import image from "../assets/guvi-logo.png";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-success-subtle h-100">
          <div className="container-fluid h-100">
            <a className="navbar-brand col-1" href="#">
            <img src={image} alt="guvi logo" className="img-fluid"/> 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="blogs/all">
                    Blogs
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 border border-success bg-success-subtle"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      <Outlet />
    </>
  );
};

export default Navbar;