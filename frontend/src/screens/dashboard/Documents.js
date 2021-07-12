import React from "react";
import SideMenu from "../../components/dashboard/SideMenu";
import { Container, Grid, Paper, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
function Documents() {
  return (
    <SideMenu>
      <Container className="mt-5">
        <h4>Recently Used</h4>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Paper className="p-3" elevation={0}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              mollitia voluptates eius vitae temporibus maiores velit ex totam
              ab, commodi obcaecati libero voluptatibus recusandae est, ipsa
              cupiditate aut molestiae esse!
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper className="p-3" elevation={0}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              doloremque assumenda nemo eligendi nam odio ducimus aut facere
              nesciunt delectus esse atque, ratione quas accusamus aspernatur,
              laborum blanditiis. Ut, iure?
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper className="p-3" elevation={0}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              vero est nesciunt aliquid ea itaque ipsa pariatur fugiat et quo
              alias possimus, ratione at debitis! Vel tenetur corporis provident
              earum?
            </Paper>
          </Grid>

          <h4 className="mt-4 px-2">Recent Documents</h4>
          <Grid container spacing={2} className="px-3 py-2">
            <Grid item sm={4} md={3} xs={6} className="mr-5">
              <Paper className="p-4">
                <Paper
                  className="rounded-circle mx-auto"
                  style={{ width: "max-content" }}
                >
                  <IconButton>
                    <AddIcon color="primary" style={{ fontSize: "4rem" }} />
                  </IconButton>
                </Paper>
                <h4 className="text-center mt-4">Create new document</h4>
              </Paper>
            </Grid>
            <Grid item sm={4} md={4} xs={6}>
              <Paper className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                doloremque assumenda nemo eligendi nam odio ducimus aut facere
                nesciunt delectus esse atque, ratione quas accusamus aspernatur,
                laborum blanditiis. Ut, iure?
              </Paper>
            </Grid>
            <Grid item sm={4} md={4} xs={6}>
              <Paper className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                doloremque assumenda nemo eligendi nam odio ducimus aut facere
                nesciunt delectus esse atque, ratione quas accusamus aspernatur,
                laborum blanditiis. Ut, iure?
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SideMenu>
  );
}

export default Documents;
