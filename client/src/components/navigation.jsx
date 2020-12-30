import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <Link to="/" style={{ textDecoration: "None", color: "inherit" }}>
                <h5 className="mobile__heading">Notiing Hill Law</h5>
                <div className="logo__heading">
                  <div className="logo">
                    <span className="">NHL</span>
                  </div>
                  <h5>Notting Hill Law</h5>
                  <h6>Immigration Law simplified</h6>
                </div>
              </Link>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/process">Process</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              {/* <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              {/* <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li> */}
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
