import React from "react";
import ServiceRightSideInfo from "./ServiceRightSideInfo";

function WorkVisa(props) {
  return (
    <div className="workvisa">
      <div className="spousalvisa col-md-5">
        <div className="main__heading">
          <div className="service__heading">
            {props.visatype == "hongkong" ? (
              <h1 style={{ fontSize: "2.5em" }}>{props.title}</h1>
            ) : (
              <h1>{props.title}</h1>
            )}
          </div>
          <div className="service__headingtext">
            <h3>{props.headingMain}</h3>
            <p className="siteline">{props.headingParagraph}</p>
          </div>
        </div>
        <div className="service__imgs">
          <img
            src={`/nottingimg/${props.img}.png`}
            className="spousalimg"
            alt=""
          />
        </div>
      </div>
      <ServiceRightSideInfo
        heading={props.heading}
        point1={props.point1}
        point2={props.point2}
        point3={props.point3}
        point4={props.point4}
        point5={props.point5}
        visatype={props.visatype}
        innovation={props.innovation}
        viability={props.viability}
        scalibility={props.scalibility}
      />
    </div>
  );
}

export default WorkVisa;
