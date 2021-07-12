import React from "react";
import SideMenu from "../../components/dashboard/SideMenu";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Grid, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
function Dashboard() {
  return (
    <SideMenu>
      <Container maxWidth="lg">
        {/* First portion */}
        <Grid container>
          <Grid item sm={8} xs={12} className="px-2">
            <Paper className="mt-5 row mr-0 ml-0" elevation={0}>
              <Grid item sm={8} xs={12}>
                <h2 className="p-3">Hello, Afnan Nadeem</h2>
              </Grid>
              <Grid item sm={4} xs={12}>
                <img
                  width="150"
                  src="https://purepng.com/public/uploads/large/purepng.com-super-mariomariosuper-mariovideo-gamefictional-characternintendoshigeru-miyamotomario-franchise-17015286383789a9am.png"
                  alt=""
                />
              </Grid>
            </Paper>

            {/* Second Portion */}
            <Grid container spacing={1} className="mt-2">
              <Grid item sm={4} xs={12}>
                <Paper
                  className="p-2"
                  style={{ borderRadius: "6px" }}
                  elevation={0}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maiores nesciunt ea facilis quaerat corporis
                  reprehenderit, perferendis totam, qui ab distinctio, fugiat
                  odit?
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className="p-2"
                  style={{ borderRadius: "6px" }}
                  elevation={0}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maiores nesciunt ea facilis quaerat corporis
                  reprehenderit, perferendis totam, qui ab distinctio, fugiat
                  odit?
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className="p-2"
                  style={{ borderRadius: "6px" }}
                  elevation={0}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maiores nesciunt ea facilis quaerat corporis
                  reprehenderit, perferendis totam, qui ab distinctio, fugiat
                  odit?
                </Paper>
              </Grid>
            </Grid>

            {/* 3rd Portion */}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maiores nesciunt ea facilis quaerat corporis
                  reprehenderit, perferendis totam, qui ab distinctio, fugiat
                  odit?
                </Paper>
              </Grid>
              <Grid item sm={4} md={4} xs={6}>
                <Paper className="p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maiores nesciunt ea facilis quaerat corporis
                  reprehenderit, perferendis totam, qui ab distinctio, fugiat
                  odit?
                </Paper>
              </Grid>
            </Grid>

            {/* 4th Portion */}
            <Paper className="p-2 rounded mt-3">
              <h4>Upcoming schedules</h4>
              <Grid container className="p-3" spacing={2}>
                <Grid item sm={6}>
                  <Paper elevation={1}>helo</Paper>
                </Grid>
                <Grid item sm={6}>
                  <Paper elevation={1}>helo</Paper>
                </Grid>
              </Grid>
            </Paper>

            <Paper className="mt-4 p-2">hello</Paper>
          </Grid>
          <Grid item sm={4} xs={12} className="px-2">
            <Paper className="mt-5" elevation={0}>
              <h4 className="p-3">Notifications</h4>
              <div className="pre-scrollable px-4" style={{ height: "250px" }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus maiores nesciunt ea facilis quaerat corporis
                  reprehenderit, perferendis totam, qui ab distinctio, fugiat
                  odit? Magni atque repudiandae excepturi! Aspernatur,
                  doloremque dignissimos.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium a veritatis reprehenderit omnis quidem harum cum
                  animi voluptate dolorum tempora inventore, doloremque unde,
                  assumenda ea neque ratione corrupti debitis ducimus?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi tempore commodi officia, alias doloremque repellat
                  accusantium deserunt distinctio et deleniti rem, quibusdam
                  harum neque recusandae illo ab, non voluptas tempora.
                </p>
              </div>{" "}
            </Paper>
          </Grid>
        </Grid>
        <Grid container></Grid>
      </Container>
    </SideMenu>
  );
}

export default Dashboard;
