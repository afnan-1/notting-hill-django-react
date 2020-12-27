import React from "react";
import ServiceRightSideInfo from "./ServiceRightSideInfo";

function WorkVisa(props) {
  return (
    <div className="workvisa">
      <div className="spousalvisa col-md-5">
        <div className="main__heading">
          <div className="service__heading">
            <h1>{props.title}</h1>
          </div>
          <div className="service__headingtext">
            <h3>{props.headingMain}</h3>
            <p className="siteline">
            {props.headingParagraph}
            </p>
          </div>
        </div>
        <div className="service__imgs">
          <img src={`/nottingimg/${props.img}.png`} className="spousalimg" alt="" />
        </div>
      </div>
      <ServiceRightSideInfo workvisa='140px' heading={props.heading}
      point1={props.point1}
      point2={props.point2}
      point3={props.point3}
      visatype={props.visatype} />
    </div>
  );
}

export default WorkVisa;
