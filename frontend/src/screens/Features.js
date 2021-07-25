import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data/data.json";

export class features extends Component {
  render() {
    document.title = "Notting Hill Law"

    const JsonData = data.Features;
    return (
      <>
      <div id="features"  className="text-center" style={{background:"url('/static/intro-bg0.png 50% 0%') 50% 0%",backgroundSize:"cover"}}>
        <ScrollToTop />
        <div className="container ff">
          <div className="col-md-12 col-md-offset-1 section-title">
            <h2>Our Process</h2>
          </div>
          <div className="row">
            {JsonData
              ? JsonData.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-xs-12 col-sm-6 col-md-4 feature_icon"
                  >
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default features;
