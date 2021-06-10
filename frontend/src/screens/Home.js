import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";

export class Home extends Component {
  render() {
    return (
      <header id="header">
        <ScrollToTop />
        <div
          className="intro"
          style={{ background: "url('./img/intro-bg1.png')" }}
        >
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 header-text">
                  <h1>
                    Immigration? <br /> Simple.
                    <span></span>
                  </h1>
                  <p>
                    We provide quick and easy expert <br /> legal advice.
                  </p>
                  <a
                    href="#contact"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Get in touch
                  </a>{" "}
                </div>
                <div className="col-md-6 col-sm-12 col-md-offset-2 ">
                  <img
                    src="/img/intro-logo.png"
                    className="intro-logo"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
