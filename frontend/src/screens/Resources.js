import React, { useEffect, useState } from "react";
import "../static/guides.scss";
import "../static/resources.css";
import { Grid, Container, CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { listGuides } from "../store/actions/guidesActions";
import Hidden from "@material-ui/core/Hidden";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
function Resources() {
  const history = useHistory();
  const dispatch = useDispatch();
  const guidesList = useSelector((state) => state.guidesList);
  const { loading, guideList, error } = guidesList;
  useEffect(() => {
    dispatch(listGuides());
  }, [dispatch]);
  return (
    <div id="portfolio">
      <ScrollToTop />
      <Container style={{ maxWidth: "1500px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} className="mt-sm-5 p-3 ">
            <h3 style={{ fontSize: "35px" }}>
              Free Guide to the EU Settlement Scheme
            </h3>
            <p>
              Now that the UK has left the EU, it is important you have the
              appropriate immigration status if you would like to live and work
              in the UK. If you're an EU, EEA or Swiss citizan, you and your
              family can apply to the EU settlement Scheme to continue living in
              the UK after 30 june 2021
            </p>
            <div className="text-center text-sm-left">
              <button
                className="btn btn-custom btn-lg mt-4"
                onClick={() => history.push("/resources/guides")}
              >
                Download
              </button>
            </div>
          </Grid>
          <Hidden only={["sm", "xs"]}>
            <Grid item xs={false} md={6}>
              <img
                src="/nottingimg/resources.png"
                className="img-fluid"
                alt=""
              />
            </Grid>
          </Hidden>
        </Grid>
        <hr />

        {/* Guides list*/}
        <Grid container>
          <Grid item container spacing={1} md={9}>
            {guideList
              ? guideList.map((v, i) => (
                  <Grid key={i} item sm={6} md={4}>
                    <CardActionArea
                      onClick={() => history.push(`/resources/${v.id}`)}
                      className="p-2 rounded"
                    >
                      <img
                        src={v.pdf_image}
                        className="img-fluid"
                        alt={v.title}
                      />
                      <h3 className="text-md-left text-sm-left text-center">
                        {v.title}
                      </h3>
                    </CardActionArea>
                  </Grid>
                ))
              : Array.from(Array(3).keys()).map((i) => (
                  <Box padding={3} key={i}>
                    <Skeleton variant="rect" width={250} height={200} />
                    <Skeleton animation="wave" />
                  </Box>
                ))}
          </Grid>
          <Grid item sm={6} md={3} className="mb-3">
            <h3>Free Guide to Tier 5 Temporary Worker Visa</h3>
            <p>
              The Tier 5 Temporary Work Visa allows people to come to the UK to
              work,if they meet the eligibilty
            </p>
            <div className="text-center">
              <button className="btn btn-custom btn-lg">Read More</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Resources;
