import Header from "./components/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./screens/Services";
import data from "./data/data.json";
import Features from "./screens/Features";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Visa from "./screens/Visa";
import Dashboard from "./screens/dashboard/Dashboard";
import Documents from "./screens/dashboard/Documents";
import DocumentGenerator from "./screens/dashboard/DocumentGenerator";
import Resources from "./screens/Resources";
import Guides from "./screens/Guides";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ForgotPassword from "./screens/ForgotPassword";
import NewPassword from "./screens/NewPassword";
import UploadDocuments from "./screens/dashboard/UploadDocuments";
import DocumentEditor from "./screens/dashboard/DocumentEditor";
import NotFound404 from "./screens/NotFound404";
function App() {
  const JsonData = data;
  return (
    <Router hashType="noslash">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/process" component={Features} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/resources/:slug/" component={Guides} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        {/* <Route exact path="/dashboard/profile" component={Dashboard} /> */}
        {/* <Route exact path="/dashboard/documents" component={Documents} /> */}
        {/* <Route
          exact
          path="/dashboard/documents/editor"
          component={DocumentEditor}
        /> */}
        {/* <Route
          exact
          path="/dashboard/documents/upload"
          component={UploadDocuments}
        /> */}

        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/users/password_reset/" component={NewPassword} />

        {/* <Route
          exact
          path="/dashboard/documents/create"
          component={DocumentGenerator}
        /> */}
        <Route
          path="/spousalvisa"
          render={() => (
            <>
              <Visa
                img="spousalnew"
                title="Spousal Visa"
                headingParagraph="Our expert legal advisors will guide you through the visa process
                and make this experience hassle-free for you"
                headingMain="Let us reunite you with your spouse!"
                heading="Key requirments:"
                point1="A genuine relationship between the applicant and the UK sponsor"
                point2="Annual income of at least £18,600 (salaried or non-salaried)"
                point3="UK sponsor has adequate accomodation"
                point4="Meet the English Language requirement"
                visatype="spousalvisa"
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />

        <Route
          path="/hongkong"
          render={() => (
            <>
              <Visa
                img="flags"
                title="Hong Kong British Nationals (Overseas) BN(O) Visa"
                headingParagraph="The Hong Kong BN(O) Visa applications open from 31 January 2021. To find out more, contact our specialist advisors."
                headingMain="Can I settle in the UK with BN(O) Visa?"
                heading="Here are some of the requirements:"
                point1="You must be a BN(O) citizen residing in Hong Kong or the UK"
                point2="Must have a valid travel document"
                visatype="hongkong"
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />
        <Route
          exact
          path="/workvisa"
          render={() => (
            <>
              <Visa
                img="15"
                title="Work Visa"
                headingParagraph="We will provide expert advice to see if you qualify for a Tier 2 Work Visa"
                headingMain="Do you want to work in the UK?"
                heading="Here are some of the requirements:"
                point1="Your Employer has given you a Certificate of Sponsorship (CoS)"
                point2="Meet the English Language requirement"
                point3="Have enough funds to maintain yourself"
                visatype="workvisa"
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />
        <Route path="/investorvisa" exact>
          <Visa
            img="21"
            title="Investor Visa"
            headingParagraph="Our specialists can provide you with expert advice to see if you qualify for a Tier 1 Investor Visa"
            headingMain="Do you want to invest in a business in the UK?"
            heading="Here are some of the requirements:"
            point1="Access to £2 million that is in a regulated financial insititution and disposable in the UK"
            point2="Opened an account with a UK regulated bank for the purposes of investing"
            visatype="investor"
            backgroundImage="/static/14.png"
          />
        </Route>
        <Route
          path="/startupvisa"
          render={() => (
            <>
              <Visa
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
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />

        <Route
          path="/studentvisa"
          render={() => (
            <>
              <Visa
                img="17"
                title="Student Visa"
                headingParagraph="Our expert advisors can help you make a Tier 4 Student Visa application"
                headingMain="Would you like to study in the UK?"
                heading="Here are some of the requirements:"
                point1="You have a Confirmation of Acceptance for Studies"
                point2="Must have enough funds to support yourself (course fees + living costs + immigration Health Surcharge)"
                point3="Meet the English Language requirement "
                visatype="student"
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />

        <Route
          path="/temporaryworkvisa"
          render={() => (
            <>
              <Visa
                img="23"
                title="Temporary Work Visa"
                headingParagraph="We will provide expert advice to see if you qualify for a Tier 5 Temporary Work Visa"
                headingMain="Do you want to work in the UK?"
                heading="Here are some of the requirements:"
                point1="Have sponsorship from an employer"
                visatype="temporary"
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />

        <Route
          path="/eussapplication"
          render={() => (
            <>
              <Visa
                img="25"
                title="EUSS Application Support"
                headingParagraph="Our specialists can help you with an application to stay in the UK"
                headingMain="Do you want to remain in the UK after Brexit?"
                heading="Here are some of the requirements:"
                point1="ID documents such as passport or National ID card"
                point2="Proof of residence in the UK"
                visatype="euss"
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />

        <Route
          path="/innovatorvisa"
          render={() => (
            <>
              <Visa
                img="innovator"
                title="Innovator Visa"
                headingParagraph="Our specialists can provide you with expert advice to see if you qualify for Innovator Visa."
                headingMain="Are you an experienced businessman and want to establish a business in the UK?"
                heading="Here are some things you will need:"
                point1="Access to min £50k to invest as well as maintenance funds ( £1,270 in savings to support yourself)"
                point2="Your business idea must be endorsed by an approved UK endorsing body"
                point3="Meet the English Language requirement (CEFR Level B2-equivalent to IELTS 5.5)"
                visatype="innovator"
                backgroundImage="/static/14.png"
              />
            </>
          )}
        />
        <Route component={NotFound404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
