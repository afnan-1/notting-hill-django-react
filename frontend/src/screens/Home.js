import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data/data.json";
import Features from "../screens/Features";
import Footer from "../components/Footer";
import Contact from "../screens/Contact";
import Services from "../screens/Services";
import Header from "../components/Header";
export class Home extends Component {
  render() {
    const JsonData = data;
    return (
      <>
        <header id="header">
          <ScrollToTop />
          <div
            className="intro"
            style={{
              background: "url('./img/intro-bg1.png')",
              backgroundSize: "cover",
            }}
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
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Features data={JsonData.Features} />
        <Services data={JsonData.Services} />
        <Contact data={JsonData.Contact} />
        <Footer />
      </>
    );
  }
}

export default Home;
