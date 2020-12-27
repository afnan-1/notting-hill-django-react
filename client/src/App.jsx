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
export class App extends Component {
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
        
        <Switch>
          <Route exact path="/">
            <div>
            <Navigation navType="main" />
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
          <Navigation />
            <SposualVisa />
          </Route>
          <Route path="/workvisa">
          <Navigation />
            <WorkVisa
              img='15'
              title='Work Visa'
              headingParagraph='We will provide expert advice to see if you qualify for a Tier 2 Work Visa'
              headingMain="Do you want to work in the UK?"
              heading="Here are some of the requirements:"
              point1="Your Employer has given you a Certificate of Sponsarship"
              point2="Meet the english language requirement"
              point3="Have enough fund to maintain yourself"
            />
          </Route>
          <Route path='/studentvisa'>
          <Navigation />
          <WorkVisa
              img='17'
              title='Student Visa'
              headingParagraph='Our expert advisors can help you make a Tier 4 Student Visa application'
              headingMain="Would you like to study in the UK?"
              heading="Here are some of the requirements:"
              point1="You have a confirmation of Acceptance of Studies"
              point2="Must have enough funds to support yourself (course fees + living costs + immigration Health Surcharge)"
              point3="Meet the English Language Requirement "
            />
          </Route>
          <Route path='/entrepreneurvisa'>
          <Navigation  />
          <WorkVisa
              img='19'
              title='Entrepreneur Visa'
              headingParagraph='Our specialists can provide you with expert advice to see if you qualify for a Tier 1 Entrepreneur Visa'
              headingMain="Do you want to start or invest in a buisness in the Uk?"
              heading="Here are some things you will need:"
              point1="Access to £50k to invest*"
              point2="Meet the English language Requirement"
              visatype='entrepreneur'
            />
          </Route>
          <Route path='/investorvisa'>
          <Navigation />
          <WorkVisa
              img='21'
              title='Investor Visa'
              headingParagraph='Our specialists can provide you with expert advice to see if you qualify for a Tier 1 Entrepreneur Visa'
              headingMain="Do you want to invest in a business in the UK?"
              heading="Here are some of the requirements:"
              point1="Access to £2 million that is in a regulated financial insititution and disposable in the UK"
              point2="Opened an account with a UK regulated bank for the purposes of investing"
              visatype='Investorvisa'
            />
          </Route>
          <Route path='/temporaryworkvisa'>
          <Navigation  />
          <WorkVisa
              img='23'
              title='Temporary Work Visa'
              headingParagraph='We will provide expert advice to see if you qualify for a Tier 5 Temporary Work Visa'
              headingMain="Do you want to work in the UK?"
              heading="Here are some of the requirements:"
              point1="Do you work in agriculture, creative arts, sports, charity or as a Minister of Religion?"
              point2="Have sponsorship from an employer"
              visatype='temporaryworkvisa'
            />
          </Route>
          <Route path='/eussapplication'>
          <Navigation />
          <WorkVisa
              img='25'
              title='EUSS Application Support'
              headingParagraph='Our specialists can help you with an application to stay in the UK'
              headingMain="Do you want to remain in the UK after Brexit?"
              heading="Here are some of the requirements:"
              point1="Are you a national of a country in the EU or EEA and currently living in the UK?"
              point2="ID documents such as passport or National ID card"
              point3="proof of residence in the UK"
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
