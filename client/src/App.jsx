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
  constructor(){
    super()
    document.title = "Notting Hill Law";
  }
  
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    
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
              <Footer />
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
              point2="Meet the English Language requirement"
              point3="Have enough funds to maintain yourself"
              visatype="workvisa"
            />
          </Route>
          <Route path="/startupvisa">
            <WorkVisa
              img="startup"
              title="Start-ups Visa"
              headingParagraph="Our specialists can provide you with expert advice to see if you qualify for the new Start-up Visa."
              headingMain="Are you an ambitious new entrepreneur looking to establish a business in the UK for the first time?"
              heading="Here are some of the requirements:"
              innovation="Innovation"
              viability="Viability"
              scalibility="Scalability"
              point1="You need a genuine, innovative business plan that meets new or existing market needs and/or creates a competitive advantage."
              point2="You need to be actively developing,the necessary skills, knowleadge, experience and market awareness to successfully run the business"
              point3="You need evidence of potential job creation "
              point4="Your business idea must be endorsed by an approved UK endorsing body"
              point5="Meet the English Language requirement (CEFR Level B2--equivalent to IELTS 5.5)"
              visatype="startup"
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
              point3="Meet the English Language requirement "
              visatype="student"
            />
          </Route>
          <Route path="/innovatorvisa">
            <WorkVisa
              img="innovator"
              title="Innovator Visa"
              headingParagraph="Our specialists can provide you with expert advice to see if you qualify for Innovator Visa."
              headingMain="Are you an experienced businessman and want to establish a business in the UK?"
              heading="Here are some things you will need:"
              point1="Access to min £50k to invest as well as maintenance funds ( £1,270 in savings to support yourself)"
              point2="Your business idea must be endorsed by an approved UK endorsing body"
              point3="Meet the English Language requirement (CEFR Level B2-equivalent to IELTS 5.5)"
              visatype='innovator'
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
              // point1="Do you work in agriculture, creative arts, sports, charity or as a Minister of Religion?"
              point1="Have sponsorship from an employer"
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
              // point1="Are you a national of a country in the EU or EEA and currently living in the UK?"
              point1="ID documents such as passport or National ID card"
              point2="Proof of residence in the UK"
              visatype="euss"
            />
          </Route>
          <Route path="/hongkong">
            <WorkVisa
              img="flags"
              title="Hong Kong British Nationals (Overseas) BN(O) Visa"
              headingParagraph="The Hong Kong BN(O) Visa applications open from 31 January 2021. To find out more, contact our specialist advisors."
              headingMain="Can I settle in the UK with BN(O) Visa?"
              heading="Here are some of the requirements:"
              point1="You must be a BN(O) citizen residing in Hong Kong or the UK"
              point2="Must have a valid travel document"
              visatype="hongkong"
            />
          </Route>
          <Route path="/contactus">
            <Contact data={this.state.landingPageData.Contact} />
            <Footer />
          </Route>
          <Route path="/service">
            <Services data={this.state.landingPageData.Services} />
            <Footer />
          </Route>
          <Route path="/process">
            {/* <div> */}
            <Features data={this.state.landingPageData.Features} />
            <Footer />
            {/* </div> */}
          </Route>
        </Switch>
       
      </Router>
    );
  }
}

export default App;
