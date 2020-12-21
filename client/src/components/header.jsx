import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-10 header-text">
                  <h1>
                    Immigration?Simple.
                    <span></span>
                  </h1>
                  <p>
                    We provide quick and easy expert legal advice.
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Get in touch
                  </a>{" "}
                </div>
                <div className="col-md-6 col-sm-12 col-md-offset-2 ">
                  <img src="/img/intro-logo.png" className="intro-logo" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
