import React, { useEffect, useState } from "react";
import "../static/guides.scss";
import "../static/resources.css";
import { Grid, Container, CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { getGuides } from "../actions/guides";

function Resources() {
  const history = useHistory();
  const [guides, setGuides] = useState([]);
  useEffect(() => {
    getGuides().then((res) => setGuides(res.data));
  }, []);
  return (
    <div id="portfolio">
      <Container style={{ maxWidth: "1500px" }}>
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
              <button
                className="btn btn-custom btn-lg mt-4"
                onClick={() => history.push("/resources/guides")}
              >
                Download
              </button>
            </div>
          </Grid>
          <Grid item xs={false} sm={6}>
            <img src="/nottingimg/resources.png" className="img-fluid" alt="" />
          </Grid>
        </Grid>
        <hr />

        {/* Guides */}
        <Grid container>
          <Grid item container spacing={1} md={9}>
            {guides&&guides.map((v, i) => (
              <Grid key={i} item sm={6} md={4}>
                <CardActionArea
                  onClick={() => history.push(`/resources/${v.id}`)}
                  className="p-2 rounded"
                >
                  <img src={v.pdf_image} className="img-fluid" alt={v.title} />
                  <h3 className="text-md-left text-sm-left text-center">
                    {v.title}
                  </h3>
                </CardActionArea>
              </Grid>
            ))}
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
