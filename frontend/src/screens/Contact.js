import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
function Contact(props) {
  return (
    <div>
      <ScrollToTop />
      <div id="contact" className="px-4">
        <div className="ml-2 mx-auto row">
          <div className="col-md-8">
            <div className="container">
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
                        id="firstname"
                        className="form-control contact__form"
                        placeholder="First Name"
                        name="firstname"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="lastname"
                        className="form-control contact__form"
                        placeholder="last Name"
                        name="lastname"
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
                        placeholder="Phone Number"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-group">
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="form-control contact__form"
                        placeholder="Country/ Region"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-group">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control contact__form"
                        placeholder="City"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  {/* <div className="check-1"> */}
                  <div className="col-md-7">
                    <h6>Type of Visa</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="innovator"
                        name="innovator"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="innovator"
                      >
                        Innovator Visa (Tier 1)
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="investor"
                        name="investor"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="investor"
                      >
                        Investor Visa (Tier 1)
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="start-up"
                        name="start-up"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="start-up"
                      >
                        Start-up Visa (Tier 1)
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="spouse"
                        name="spouse"
                        className="form-check-input"
                      />
                      <label className="form-check-label pl-2" htmlFor="spouse">
                        Spouse Visa
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="skillwork"
                        name="skillwork"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="skillwork"
                      >
                        Skilled Work Visa (Tier 2)
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="temporarywork"
                        name="temporarywork"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="temporarywork"
                      >
                        Temporary Work Visa (Tier 5)
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="student"
                        name="student"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="student"
                      >
                        Student Visa (Tier 4)
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="euss"
                        name="euss"
                        className="form-check-input"
                      />
                      <label className="form-check-label pl-2" htmlFor="euss">
                        EUSS
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="hongkong"
                        name="hongkong"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="hongkong"
                      >
                        Hong Kong BN(O) Visa
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="other"
                        name="other"
                        className="form-check-input"
                      />
                      <label className="form-check-label pl-2" htmlFor="other">
                        Other
                      </label>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  {/* </div> */}
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
                  <h6 className="col-sm-12 text-uppercase">
                    Can you suggest a date for your free 30 min consultation
                    call?
                  </h6>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="yyyy"
                        name="yyyy"
                        className="form-control contact__form"
                        placeholder="YYYY"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="mm"
                        name="mm"
                        className="form-control contact__form"
                        placeholder="MM"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="dd"
                        name="dd"
                        className="form-control contact__form"
                        placeholder="DD"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <h6 className="col-sm-12 text-uppercase">
                    Can you suggest a suitable time? (GMT UK TIME)
                  </h6>
                  <div className="col-md-7 text-uppercase">
                    <div className="form-group">
                      <input
                        type="text"
                        id="time"
                        name="time"
                        className="form-control contact__form"
                        placeholder="Can you suggest a suitable time? (GMT UK TIME)
                        "
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <h6 className="col-sm-12 text-uppercase">Ticket Name</h6>
                  <div className="col-md-7">
                    <div className="form-group">
                      <input
                        type="text"
                        id="ticketname"
                        name="ticketname"
                        className="form-control contact__form"
                        placeholder="Ticket Name"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <h6 className="col-sm-12 text-uppercase">
                    Ticket Description
                  </h6>
                  <div className="col-md-7">
                    <div className="form-group">
                      <input
                        type="text"
                        id="ticketdesc"
                        name="ticketdesc"
                        className="form-control contact__form"
                        placeholder="Ticket Description"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>

                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-1 contact-info">
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