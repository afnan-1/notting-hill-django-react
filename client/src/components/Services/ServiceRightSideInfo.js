import React from "react";
import { Link, useHistory } from "react-router-dom";
function ServiceRightSideInfo(props) {
  const history = useHistory();
  const style = {
    marginLeft: props.workvisa,
  };
  return (
    <div className={`rightside_info col-md-5 col-sm-12 col-xl-6`} style={style}>
      <h1>{props.heading}</h1>
      <div className="points">
        <div className="point1">
          <img src="/nottingimg/6.png" className="rightside__img" alt="" />
          <h4>{props.point1}</h4>
        </div>
        {props.visatype=='temporary'?'':
        <div className="point1">
          <img src="/nottingimg/7.png" className="rightside__img" alt="" />
          <h4>{props.point2}</h4>
        </div>}
      {props.visatype=='investor' || props.visatype=='temporary' || props.visatype=='hongkong' || props.visatype=='euss'?
      '':
        <div className="point1">
          <img src="/nottingimg/8.png" className="rightside__img" alt="" />
          <h4>{props.point3}</h4>
        </div>
      }
        {props.visatype ? (
          ""
        ) : (
          <div className="point1">
            <img src="/nottingimg/9.png" className="rightside__img" alt="" />
            <h4>{props.point4}</h4>
          </div>
        )}

        <button
          className="btn btn-primary"
          onClick={() => history.push("/contactus")}
        >
          Book Free 30 min Call
        </button>
      </div>
    </div>
  );
}

export default ServiceRightSideInfo;
