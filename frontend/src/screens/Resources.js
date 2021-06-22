import React from "react";
import "../static/guides.scss";
import "../static/resources.css";
import { Grid, Container, CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Resources() {
  const history = useHistory()
  return (
    <div id="portfolio">
      <Container maxWidth="lg">
        {/* header */}
        <Grid container>
          <Grid item xs={12} sm={6} className="mt-sm-5 pr-sm-0 pr-sm-5">
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
              <button className="btn btn-custom btn-lg mt-4" onClick={()=>history.push("/resources/guides")}>Download</button>
            </div>
          </Grid>
          <Grid item xs={0} sm={6}>
            <img src="/nottingimg/resources.png" className="img-fluid" alt="" />
          </Grid>
        </Grid>
        <hr />

        {/* Guides */}
        <Grid container spacing={2}>
          <Grid item sm={6} md={3}>
            <CardActionArea onClick={()=>history.push('/resources/tier1')} className="p-2 rounded">
              <img
                src="/nottingimg/resources.png"
                className="img-fluid"
                alt=""
              />
              <h3 className="text-md-left text-sm-left text-center">
                Free Guide to Tier 1 Investor Visa
              </h3>
            </CardActionArea>
          </Grid>
          <Grid item sm={6} md={3}>
            <CardActionArea onClick={()=>history.push('/resources/tier5')} className="p-2 rounded">
              <img
                src="/nottingimg/resources.png"
                className="img-fluid"
                alt="tier"
              />
              <h3 className="text-md-left text-sm-left text-center">
                Free Guide to Tier 2 Skilled Worker Visa
              </h3>
            </CardActionArea>
          </Grid>
          <Grid item sm={6} md={3}>
            <CardActionArea className="p-2 rounded">
              <img
                src="/nottingimg/resources.png"
                className="img-fluid"
                alt=""
              />
              <h3 className="text-md-left text-sm-left text-center">
                Free Guide to Tier 5 Investor Visa
              </h3>
            </CardActionArea>
          </Grid>
          <Grid item sm={6} md={3}>
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
