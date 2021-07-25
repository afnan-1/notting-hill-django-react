import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data/data.json";

export class Services extends Component {
  render() {
    document.title = "Notting Hill Law"

    const JsonData = data.Services;
    return (
      <>
        <div id="services" className="text-center">
          <ScrollToTop />
          <div className="container ff">
            <div className="section-title">
              <h2>Immigration law Services.</h2>
            </div>
            <div className="row">
              {JsonData
                ? JsonData.map((d, i) => (
                    <div
                      key={`${d.name}-${i}`}
                      className="col-md-4 align-items-center"
                    >
                      {" "}
                      <Link to={d.path}>
                        <img src={d.icon} className="service__icon" alt="" />
                        <div className="service-desc">
                          <h3>{d.name}</h3>
                        </div>
                      </Link>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
