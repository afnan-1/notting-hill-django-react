import React, { useState } from "react";
function Contact(props) {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact Us</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="name"
                        className="form-control contact__form"
                        placeholder="Name"
                        name="name"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control contact__form"
                        placeholder="Email"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-group">
                      <input
                        type="text"
                        id="telephone"
                        name="telephone"
                        className="form-control contact__form"
                        placeholder="Telephone"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-7">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control contact__form"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <a href={props.data ? props.data.facebook : "/"}>
                  <span>
                    <i className="fa fa-facebook"></i> Notting Hill Law
                  </span>
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <a href={props.data ? props.data.twitter : "/"}>
                  <span>
                    <i className="fa fa-twitter"></i>@lawNotting
                  </span>
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <a href={props.data ? props.data.youtube : "/"}>
                  <span>
                    <i className="fa fa-instagram"></i> Notting_hill_law
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
