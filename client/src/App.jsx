import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SposualVisa from "./components/Services/SposualVisa";
import WorkVisa from "./components/Services/WorkVisa";
import Footer from "./components/Footer";
export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    document.title = "Notting Hill Law";
    this.getlandingPageData();
  }

  render() {
    return (
      <Router>
        {" "}
        <Navigation />
        <Switch>
          <Route exact path="/">
            <div>
              <Header data={this.state.landingPageData.Header} />
              <Features data={this.state.landingPageData.Features} />
              {/* <About data={this.state.landingPageData.About} /> */}
              <Services data={this.state.landingPageData.Services} />
              {/* <Gallery /> */}
              {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
              {/* <Team data={this.state.landingPageData.Team} /> */}
              <Contact data={this.state.landingPageData.Contact} />
            </div>
          </Route>
          <Route path="/spousalvisa">
            <SposualVisa />
          </Route>
          <Route path="/workvisa">
            <WorkVisa
              img="15"
              title="Work Visa"
              headingParagraph="We will provide expert advice to see if you qualify for a Tier 2 Work Visa"
              headingMain="Do you want to work in the UK?"
              heading="Here are some of the requirements:"
              point1="Your Employer has given you a Certificate of Sponsorship (CoS)"
              point2="Meet the english language requirement"
              point3="Have enough funds to maintain yourself"
              visatype="workvisa"
            />
          </Route>
          <Route path="/studentvisa">
            <WorkVisa
              img="17"
              title="Student Visa"
              headingParagraph="Our expert advisors can help you make a Tier 4 Student Visa application"
              headingMain="Would you like to study in the UK?"
              heading="Here are some of the requirements:"
              point1="You have a Confirmation of Acceptance for Studies"
              point2="Must have enough funds to support yourself (course fees + living costs + immigration Health Surcharge)"
              point3="Meet the English Language Requirement "
              visatype="student"
            />
          </Route>
          <Route path="/entrepreneurvisa">
            <WorkVisa
              img="19"
              title="Entrepreneur Visa"
              headingParagraph="Our specialists can provide you with expert advice to see if you qualify for a Tier 1 Entrepreneur Visa"
              headingMain="Do you want to start or invest in a buisness in the Uk?"
              heading="Here are some things you will need:"
              point1="Access to £200k to invest*"
              point2="Buisness Plan - should set out all buisness activities you intend to carry out"
              point3="Pass the 'Genuine Entrepreneur Test' conducted by the Home Office"
              point4="Meet the English language Requirement"
              // visatype='entrepreneur'
            />
          </Route>
          <Route path="/investorvisa">
            <WorkVisa
              img="21"
              title="Investor Visa"
              headingParagraph="Our specialists can provide you with expert advice to see if you qualify for a Tier 1 Investor Visa"
              headingMain="Do you want to invest in a business in the UK?"
              heading="Here are some of the requirements:"
              point1="Access to £2 million that is in a regulated financial insititution and disposable in the UK"
              point2="Opened an account with a UK regulated bank for the purposes of investing"
              visatype="investor"
            />
          </Route>
          <Route path="/temporaryworkvisa">
            <WorkVisa
              img="23"
              title="Temporary Work Visa"
              headingParagraph="We will provide expert advice to see if you qualify for a Tier 5 Temporary Work Visa"
              headingMain="Do you want to work in the UK?"
              heading="Here are some of the requirements:"
              point1="Do you work in agriculture, creative arts, sports, charity or as a Minister of Religion?"
              point2="Have sponsorship from an employer"
              visatype="temporary"
            />
          </Route>
          <Route path="/eussapplication">
            <WorkVisa
              img="25"
              title="EUSS Application Support"
              headingParagraph="Our specialists can help you with an application to stay in the UK"
              headingMain="Do you want to remain in the UK after Brexit?"
              heading="Here are some of the requirements:"
              point1="Are you a national of a country in the EU or EEA and currently living in the UK?"
              point2="ID documents such as passport or National ID card"
              point3="Proof of residence in the UK"
              visatype="euss"
            />
          </Route>
          <Route path="/hongkong">
            <WorkVisa
              img="flags"
              title="Honk Kong British Nationals (Overseas) BN(O) Visa"
              headingParagraph="The Hong Kong BN(O) Visa applications open from 31 january 2021. To find out more, contact our specialist advisors."
              headingMain="Can I settle in the Uk with BN(O) Visa?"
              heading="Here are some of the requirements:"
              point1="You must be a BN(O) citizen residing in Hong Kong or the UK"
              point2="Must have a valid travel document"
              visatype="hongkong"
            />
          </Route>
          <Route path="/contactus">
            <Contact data={this.state.landingPageData.Contact} />
          </Route>
          <Route path="/service">
            <Services data={this.state.landingPageData.Services} />
          </Route>
          <Route path="/process">
            <Features data={this.state.landingPageData.Features} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
