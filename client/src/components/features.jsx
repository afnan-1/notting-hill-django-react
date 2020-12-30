import React, { Component } from "react";

export class features extends Component {
 
  render() {
    let style={
      // height:'100'
    }
    if(window.location.pathname==='/process'){
      let style={
        height:'100vh'
      }
    }
    return (
      <div id="features" style={{height:window.location.pathname==='/process'?'100vh':''}} className="text-center">
        <div className="container ff">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Our Process</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-xs-12 col-sm-6 col-md-4"
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
    );
  }
}

export default features;
