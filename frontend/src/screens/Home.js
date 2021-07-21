import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data/data.json";
import Features from "../screens/Features";

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
              background: "url('/static/intro-bg1.png')",
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
                    <button
                    onClick={()=>this.props.history.push('/contactus')}
                      
                      className="btn btn-custom"
                    >
                      Get in touch
                    </button>{" "}
                  </div>
                  <div className="col-md-6 col-sm-12 col-md-offset-2 ">
                    <img
                      src="/static/intro-logo.png"
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
  
      </>
    );
  }
}

export default Home;
