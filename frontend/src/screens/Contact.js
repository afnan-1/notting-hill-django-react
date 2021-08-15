import { LinearProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data/data.json";
import { contactUs, sendEmail } from "../store/actions/contactusActions";

function Contact() {
  document.title = "Notting Hill Law";
  const JsonData = data.Contact;
  const [userContactInfo, setUserContactInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
    message: "",
    date: "",
    visa: "",
    ticket_name: "",
    ticket_desc: "",
    time: "",
    country: "",
    city: "",
  });
  const [contactDate, setContactDate] = useState({
    dd: "",
    yy: "",
    mm: "",
  });
  const [loading, setLoading] = useState(undefined);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setSuccess(false);
    setUserContactInfo({
      ...userContactInfo,
      [e.target.name]: e.target.value,
      date:
        "dd/mm/yy/ " +
        contactDate.dd +
        "/" +
        contactDate.mm +
        "/" +
        contactDate.yy,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail(
      userContactInfo.first_name + " " + userContactInfo.last_name,
      userContactInfo.message,
      userContactInfo.visa,
      userContactInfo.email,
      userContactInfo.telephone
    );
    contactUs(userContactInfo).then((data) => {
      setLoading(false);
      setSuccess(true);
      setUserContactInfo({
        first_name: "",
        last_name: "",
        email: "",
        telephone: "",
        visa: "",
        message: "",
        date: "",
        ticket_name: "",
        ticket_desc: "",
        time: "",
        country: "",
        city: "",
        date: "",
      });
    });
  };
  return (
    <>
      <ScrollToTop />
      {loading && <LinearProgress color="secondary" />}
      <div id="contact" className="px-4">
        <div className="ml-2 mx-auto row container">
          <div className="col-md-8">
            <div className="container">
              <div className="section-title">
                <h2>Contact Us</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form
                name="sentMessage"
                id="contactForm"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group ">
                      <input
                        type="text"
                        id="firstname"
                        className="form-control contact__form"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange}
                        required="required"
                        value={userContactInfo.first_name}
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
                        name="last_name"
                        value={userContactInfo.last_name}
                        onChange={handleChange}
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
                        value={userContactInfo.email}
                        className="form-control contact__form"
                        placeholder="Email"
                        onChange={handleChange}
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
                        value={userContactInfo.telephone}
                        onChange={handleChange}
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
                        value={userContactInfo.country}
                        onChange={handleChange}
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
                        value={userContactInfo.city}
                        onChange={handleChange}
                        className="form-control contact__form"
                        placeholder="City"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  {/* <div className="check-1"> */}
                  <div className="col-md-7">
                    <h6>WHAT ARE YOU INTERESTED IN?</h6>
                    <select
                      name="visa"
                      onChange={handleChange}
                      className="form-control contact__form"
                    >
                      <option selected>Select</option>
                      <option value="GETTING MARRIED">
                        1. GETTING MARRIED
                      </option>
                      <option value="STARTING A BUISNESS">
                        2. STARTING A BUISNESS
                      </option>
                      <option value="INVESTING">3. INVESTING</option>
                      <option value="WORKING IN THE UK">
                        4. WORKING IN THE UK
                      </option>
                      <option value="STUDYING IN THE UK">
                        5. STUDYING IN THE UK
                      </option>
                      <option value="STUDYING IN THE UK">
                        6. BRITISH PASSPORT
                      </option>
                      <option value="VISITING IN THE UK">
                        7. VISITING IN THE UK
                      </option>
                      <option value="SWITCHING TO ANOTHER VISA">
                        8. SWITCHING TO ANOTHER VISA
                      </option>
                      <option value="OTHER">9. OTHER</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-7">
                    <br />
                    <h6>MESSAGE</h6>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control contact__form"
                      rows="4"
                      placeholder="Message"
                      required
                      value={userContactInfo.message}
                      onChange={handleChange}
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
                        onChange={(e) =>
                          setContactDate({ ...contactDate, yy: e.target.value })
                        }
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
                        onChange={(e) =>
                          setContactDate({ ...contactDate, mm: e.target.value })
                        }
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
                        onChange={(e) =>
                          setContactDate({ ...contactDate, dd: e.target.value })
                        }
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
                        value={userContactInfo.time}
                        onChange={handleChange}
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
                        name="ticket_name"
                        className="form-control contact__form"
                        placeholder="Ticket Name"
                        required="required"
                        value={userContactInfo.ticket_name}
                        onChange={handleChange}
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
                        name="ticket_desc"
                        className="form-control contact__form"
                        placeholder="Ticket Description"
                        required="required"
                        value={userContactInfo.ticket_desc}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>

                <div id="success"></div>
                <button type="submit" className="btn btn-custom">
                  Send Message
                </button>
                {success && (
                  <Alert onClose={() => setSuccess(false)} severity="success">
                    Your message has been sent.
                  </Alert>
                )}
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
                {JsonData ? JsonData.email : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <a href={JsonData ? JsonData.facebook : "/"}>
                  <span>
                    <i className="fa fa-facebook"></i> Notting Hill Law
                  </span>
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <a href={JsonData ? JsonData.twitter : "/"}>
                  <span>
                    <i className="fa fa-twitter"></i>@lawNotting
                  </span>
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <a href={JsonData ? JsonData.youtube : "/"}>
                  <span>
                    <i className="fa fa-instagram"></i> Notting_hill_law
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
