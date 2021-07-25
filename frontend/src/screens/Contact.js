import { LinearProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data/data.json";
import { contactUs, sendEmail } from "../store/actions/contactusActions";

function Contact() {
  document.title = "Notting Hill Law"
  const JsonData = data.Contact;
  const [userContactInfo, setUserContactInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
    message: "",
    date: "",
    visa: [],
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
  const [visa, setVisa] = useState([]);
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

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      const items = [...new Set(visa.map((q) => q))];
      setVisa([...visa, e.target.name]);
      setUserContactInfo({ ...userContactInfo, visa: [...items] });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail(
      userContactInfo.first_name + " " + userContactInfo.last_name,
      userContactInfo.message
    );
    contactUs(userContactInfo).then((data) => {
      setLoading(false);
      setSuccess(true);
      setUserContactInfo({
        first_name: "",
        last_name: "",
        email: "",
        telephone: "",
        visa:[],
        message: "",
        date: "",
        ticket_name: "",
        ticket_desc: "",
        time: "",
        country: "",
        city: "",
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
                    <h6>Type of Visa</h6>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="innovator"
                        name="innovator"
                        className="form-check-input"
                        onChange={handleCheckbox}
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
                        onChange={handleCheckbox}
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
                        onChange={handleCheckbox}
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
                        name="spousal"
                        onChange={handleCheckbox}
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
                        onChange={handleCheckbox}
                        id="skillwork"
                        name="work_visa"
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
                        id="temporaryworkvisa"
                        onChange={handleCheckbox}

                        name="temporary"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label pl-2"
                        htmlFor="temporaryworkvisa"
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
                        onChange={handleCheckbox}

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
                        onChange={handleCheckbox}

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
                        onChange={handleCheckbox}
                        id="hongkong"
                        name="hong"
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
                        onChange={handleCheckbox}
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
