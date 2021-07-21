import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname == "/signup" ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/users") ||
    location.pathname === "/forgot-password"
  ) {
    return null;
  }
  return (
      <div id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-xs-10 footer-text">
              <p className='px-3'>
                Copyright 2020 &copy; Notting Hill Law is registered with the
                Office of The Immigration Services Commission (OISC) to provide
                immigration advice in the UK at level 1; its registration is
                recorded on the website:
                <a href="https://home.osic.gov.uk/adviser_finder/finder.aspx">
                  {" "}
                  home.osic.gov.uk.{" "}
                </a>
                <br />
                <span className="text-center">
                  {" "}
                  Notting Hill Law Ltd is a company registered in England,
                  Company registration number 12432552. Registered office:
                  International House, 12 Constance Street, London, E16 2DQ. All
                  rights reserved.
                </span>
              </p>
            </div>

            <div
              className="col-md-2 col-xs-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="/static/osic.png"
                className="fff"
                width="100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
