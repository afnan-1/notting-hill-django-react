import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "../components/Header";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Carousel from "react-material-ui-carousel";
import GuidesForm from "../components/GuidesForm";
import { guidesData } from "../data/guidesData";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { getGuide, getGuides } from "../actions/guides";
import { TramRounded } from "@material-ui/icons";

function Guides({ location, match }) {
  const history = useHistory();
  const guideId = match.params.slug;
  const [data, setData] = useState({
    title: "",
    guide: [],
    heading: "",
    heading_outline_paragraph: "",
    pdf: "",
    pdf_image: "",
    guide_image:""
  });

  useEffect(() => {
    let mounted = true;
    getGuide(guideId).then((res) => {
      if (mounted) {
        setData(res.data);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <>
      <Header />
      <ScrollToTop />
      <Container disableGutters style={{ maxWidth: "1500px" }}>
        <Grid container className="mt-sm-5 mt-md-0">
          <Grid item  sm={6} xs={12} style={{ backgroundColor: "#F3F3F3" }}>
            <div className="mt-md-5 p-3 p-md-5 text-center text-sm-center text-md-left">
              <span>Free Download</span>
              <h2 class="h2 text-dark"> {data&&data.heading}</h2>
              <span>{data&&data.heading_outline_paragraph}</span>
              <div className="text-center text-md-left">
                <GuidesForm  pdf={data&&data.pdf} />
              </div>
            </div>
          </Grid>
          <Grid item sm={6}  xs={12}style={{ backgroundColor: "#D1EEF7" }}>
            <div className="text-center mt-md-2 mt-sm-5 p-md-0 p-sm-3">
              <img
                className="img-fluid p-5 mt-md-5 "
                src={data&&data.guide_image}
                alt=""
                width="350"
              />
            </div>
          </Grid>

          {/* 2nd portion */}

          <Grid item md={6} xs={12}>
            <div className="mt-md-5 p-3 p-md-5">
              <h2 className="h2">What you'll find inside:</h2>
              <List>
                {data&&data.guide&&data.guide.map((v, i) => (
                  <ListItemUser text={v.point} key={i} />
                ))}
              </List>
              <div className="text-center mt-md-4">
                <GuidesForm path={location.pathname} pdf={data&&data.pdf} />
              </div>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="mt-md-5 p-md-5">
              <Carousel navButtonsAlwaysVisible className="text-center">
                <img
                  src="/nottingimg/guidesvisa1.png"
                  alt=""
                  className="img-fluid"
                  width="200"
                />
                <img
                  src="/nottingimg/guidesvisa1.png"
                  alt=""
                  className="img-fluid"
                  width="200"
                />
              </Carousel>
            </div>
          </Grid>

          {/* 3rd portion */}
          <Grid
            container
            style={{ backgroundColor: "#F3F3F3" }}
            className="mt-md-5 p-md-5"
            alignItems="center"
          >
            <Grid item md={7} sm={12} className="mt-md-5 p-md-5 p-3">
              <h2 className="h2">Book a free consultation for expert advice on your case</h2>
            </Grid>
            <Grid item md={5} sm={12} xs={12} className="text-center">
              <button className="btn btn-custom mb-xs-2 mb-0">Read More</button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function ListItemUser({ text }) {
  return (
    <ListItem>
      <ListItemIcon>
        <CheckCircleIcon className="text-success" />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
export default Guides;
