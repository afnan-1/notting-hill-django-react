import React from "react";
import ServiceRightSideInfo from "./ServiceRightSideInfo";

function SposualVisa() {
  return (
    <div className='workvisa'>
      <div className="spousalvisa col-md-5">
        <div className="main__heading">
          <div className="service__heading">
            <h1>Spousal Visa</h1>
          </div>
          <div className="service__headingtext">
            <h3>Let us reunite you with your spouse!</h3>
            <p> 
              Our expert legal advisors will guide you through the visa process
              and make this experience hassle-free for you
            </p>
          </div>
        </div>
        <div className="service__imgs">
          <img src="/nottingimg/spousalnew.png" className="spousalimg" alt="" />
        </div>
      </div>
      <ServiceRightSideInfo 
      heading='Key requirments:'
      point1="A genuine relationship between the applicant and the UK sponsor"
      point2='Annual income of at least £18,600 (salaried or non-salaried)'
      point3='UK sponsor has adequate accomodation'
      point4='Meet the English Language requirement' />
    </div>
  );
}

export default SposualVisa;
