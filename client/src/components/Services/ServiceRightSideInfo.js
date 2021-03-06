import React from "react";
import { Link, useHistory } from "react-router-dom";
function ServiceRightSideInfo(props) {
  const history = useHistory();
  return (
    <div className={`rightside_info col-md-5 col-sm-12 col-xl-6`}>
      <h1>{props.heading}</h1>
      <div className="points">
        <div className="point1">
          <img src="/nottingimg/6.png" className="rightside__img" alt="" />
          <div>
         <h4><ins>{props.innovation}</ins></h4>
          <h4>{props.point1}</h4>
          </div>
        </div>
        {props.visatype=='temporary'?'':
        <div className="point1">
          <img src="/nottingimg/7.png" className="rightside__img" alt="" />
          <div>
          <h4><ins>{props.viability}</ins></h4>
          <h4>{props.point2}</h4>
          </div>
        </div>}
      {props.visatype=='investor' || props.visatype=='temporary' || props.visatype=='hongkong' || props.visatype=='euss'?
      '':
        <div className="point1">
          <img src="/nottingimg/8.png" className="rightside__img" alt="" />
          <div>

          <h4><ins>{props.scalibility}</ins></h4>
          <h4>{props.point3}</h4>
          </div>
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

        {props.visatype=='startup'&&<>
        <div className="point1">
            <img src="/nottingimg/9.png" className="rightside__img" alt="" />
            <h4>{props.point4}</h4>
          </div>
        <div className="point1">
            <img src="/nottingimg/startup5.png" className="rightside__img" alt="" />
            <h4>{props.point5}</h4>
          </div>
          </>
}
      
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
