import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
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
              {/* <img src="/img/nhllogo.png" alt="logo" className='logo' /> */}
              <Link to="/" style={{ textDecoration: "None", color: "inherit", }}>
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
            {this.props.navType ? (
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#header" className="page-scroll">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="page-scroll">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#services" className="page-scroll">
                    Services
                  </a>
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
                  <a href="#contact" className="page-scroll">
                    Contact
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to='/#header' className="page-scroll">
                  Home
                </Link>
              </li>
              <li>
                <Link to='/#features' className="page-scroll">
                  Process
                </Link>
              </li>
              <li>
                <Link to='/#services' className="page-scroll">
                  Services
                </Link>
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
                <Link to="/#contact" className="page-scroll">
                  Contact
                </Link>
              </li>
            </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
