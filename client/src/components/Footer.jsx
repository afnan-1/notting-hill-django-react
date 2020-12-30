import React from "react";

function Footer() {
  return (
    <div>
      <div id="footer">
        <div className="container-fluid">
          <p className="col-md-10 col-xs-10 footer-text">
            Copyright 2020 &copy; Notting Hill Law is registered with the Office
            of The Immigration Services Commission (OISC) to provide immigration
            advice in the UK at level 1; its registration is recorded on the
            website:
            <a href="https://home.osic.gov.uk/adviser_finder/finder.aspx">
              {" "}
              home.osic.gov.uk.{" "}
            </a>
            <br />
            <span className="text-center">
              {" "}
              Notting Hill Law Ltd is a company registered in England, Company
              registration number 12432552. Registered office: International
              House, 12 Constance Street, London, E16 2DQ. All rights reserved.
            </span>
          </p>
          <div
            className="col-md-2 col-xs-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src="/nottingimg/osic.png" className='fff' width="100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
