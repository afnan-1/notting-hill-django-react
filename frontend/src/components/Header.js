import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { checkAuthenticated, logout } from "../actions/users";
export function Header() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (checkAuthenticated()) {
      setAuth(true);
    }
  }, []);
  const handleLogout = () => {
    setAuth(false);
    logout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
      <Link className="navbar-brand text-center ml-3" to="/">
        <span className="border p-1 color border-primary mobile__header">
          NHL
        </span>{" "}
        <h5 className="color mt-2 text-uppercase">Notting Hill Law</h5>{" "}
        <h6 className="mobile__header color mb-0">
          <small className="text-uppercase">Immigration Law simplified</small>{" "}
        </h6>
      </Link>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/process">
              Process
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">
              contact
            </Link>
          </li>
          <li className="nav-item">
            {auth ? (
              <span onClick={handleLogout} className="nav-link">
                Logout
              </span>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
