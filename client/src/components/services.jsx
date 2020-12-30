import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container ff">
          <div className="section-title">
            <h2>Immigration law Services.</h2>
            {/* <p>
              Immigration law Services.
            </p> */}
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 d-flex align-items-center">
                  {" "}
                  <Link to={d.path}>
                  <img src={d.icon} className='service__icon' alt=""/>
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
    );
  }
}

export default Services;
