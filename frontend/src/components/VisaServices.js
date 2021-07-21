import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function VisaServices(props) {
  const history = useHistory();
  return (
    <div className={`rightside_info col-md-6 col-sm-12 col-xl-6`}>
      <h1>{props.heading}</h1>
      <div className="points">
        <div className="point1">
          <img src="/static/6.png" className="rightside__img" alt="" />
          <div>
            <h4>
              <ins>{props.innovation}</ins>
            </h4>
            <p className="ml-4">{props.point1}</p>
          </div>
        </div>
        {props.visatype == "temporary" ? (
          ""
        ) : (
          <div className="point1">
            <img src="/static/7.png" className="rightside__img" alt="" />
            <div>
              <h4>
                <ins>{props.viability}</ins>
              </h4>
              <p className="ml-4">{props.point2}</p>
            </div>
          </div>
        )}
        {props.visatype == "investor" ||
        props.visatype == "temporary" ||
        props.visatype == "hongkong" ||
        props.visatype == "euss" ? (
          ""
        ) : (
          <div className="point1">
            <img src="/static/8.png" className="rightside__img" alt="" />
            <div>
              <h4>
                <ins>{props.scalibility}</ins>
              </h4>
              <p className="ml-4">{props.point3}</p>
            </div>
          </div>
        )}
        {props.visatype ? (
          ""
        ) : (
          <div className="point1">
            <img src="/static/9.png" className="rightside__img" alt="" />
            <p className="ml-4">{props.point4}</p>
          </div>
        )}
        {props.visatype === "spousalvisa" && (
          <div className="point1">
            <img src="/static/9.png" className="rightside__img" alt="" />
            <p className="ml-4">{props.point4}</p>
          </div>
        )}
        {props.visatype == "startup" && (
          <>
            <div className="point1">
              <img src="/static/9.png" className="rightside__img" alt="" />
              <p className="ml-4">{props.point4}</p>
            </div>
            <div className="point1">
              <img
                src="/static/startup5.png"
                className="rightside__img"
                alt=""
              />
              <p className="ml-4">{props.point5}</p>
            </div>
          </>
        )}

        <Button
          variant="contained"
          onClick={() => history.push("/contactus")}
          style={{ backgroundColor: "#337ab7",justifyContent:"center" }}
          color="primary"
          className="mt-4"
        >
         Book Free 30 min Call
        </Button>
      </div>
    </div>
  );
}

export default VisaServices;
