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
function Guides() {
  const history = useHistory();
  const [data, setData] = useState({
    heading: "",
    headingPara: "",
    points: [],
  });

  useEffect(() => {
    switch (history.location.pathname) {
      case "/resources/guides":
        setData({ ...guidesData.guides });
        break;
      case "/resources/tier1":
        setData({ ...guidesData.tier1 });
        break;
      case "/resources/tier5":
        setData({ ...guidesData.tier5 });
        break;
      default:
        console.log("page not found");
    }
  }, []);
  return (
    <>
      <Header />
      <Container
        disableGutters
        style={{ maxWidth: "1500px" }}
        className="mt-md-5"
      >
        <Grid container className="mt-md-5">
          <Grid item md={6} style={{ backgroundColor: "#F3F3F3" }}>
            <div className="mt-md-5 p-md-5">
              <span>Free Download</span>
              <h2>{data.heading}</h2>
              <span>{data.headingPara}</span>
              <div className="text-center text-md-left">
                <GuidesForm />
              </div>
            </div>
          </Grid>
          <Grid item md={6} style={{ backgroundColor: "#D1EEF7" }}>
            <div className="text-center">
              <img
                className="img-fluid px-md-5 py-md-5 mt-md-5"
                src="/nottingimg/guidesheader.png"
                alt=""
                width="350"
              />
            </div>
          </Grid>

          {/* 2nd portion */}

          <Grid item md={6}>
            <div className="mt-md-5 p-md-5">
              <h2>What you'll find inside:</h2>
              <List>
                {data.points.map((v, i) => (
                  <ListItemUser text={v} key={i} />
                ))}
              </List>
              <div className="text-center mt-md-4">
                <GuidesForm />
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
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
            <Grid item md={7}>
              <h2>Book a free consultation for expert advice on your case</h2>
            </Grid>
            <Grid item md={5} className="text-center">
              <button className="btn btn-custom btn-lg">Read More</button>
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
