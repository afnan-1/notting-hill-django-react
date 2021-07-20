import React, { useEffect, useState } from "react";
import "../static/guides.scss";
import "../static/resources.css";
import { Grid, Container, CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { listGuides, tempGuidesDetails } from "../store/actions/guidesActions";
import Hidden from "@material-ui/core/Hidden";
import Skeleton from "@material-ui/lab/Skeleton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Box } from "@material-ui/core";
function Resources(props) {
  const matches = useMediaQuery("(max-width:600px)");
  const history = useHistory();
  const dispatch = useDispatch();
  const guidesList = useSelector((state) => state.guidesList);
  const { loading, guideList, error } = guidesList;

  const guidesTemp = useSelector((state) => state.guidesTemp);
  const { loadingTemp, errorTemp, guide } = guidesTemp;
  useEffect(() => {
    dispatch(listGuides());
    dispatch(tempGuidesDetails());
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
                onClick={() => history.push(`/resources/${guide.id}`)}
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
          <div className="col-md-9">
            <Grid item container spacing={1}>
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
            {matches && <hr />}
          </div>
          <Grid item sm={6} md={3} className="mb-3">
            {guide ? (
              <>
                <h3>{guide.title}</h3>
                <p>{guide.heading_outline_paragraph.substr(0, 220) + "..."}</p>
                <div className="text-center">
                  <button
                    onClick={() => history.push(`/resources/${guide.id}`)}
                    className="btn btn-custom btn-lg"
                  >
                    Read More
                  </button>
                </div>
              </>
            ) : (
              <Box padding={3}>
                <Skeleton variant="rect" width={250} height={200} />
                <Skeleton animation="wave" />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Resources;
