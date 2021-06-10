import React from "react";
import VisaServices from "../components/VisaServices";
import ScrollToTop from "../components/ScrollToTop";

function Visa(props) {
  return (
    <>
      <ScrollToTop />
      <div className="workvisa row mr-0" style={{ backgroundImage: `url('${props.backgroundImage}')`, backgroundRepeat: 'no-repeat' }}>
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
        <VisaServices
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
    </>
  );
}

export default Visa;
