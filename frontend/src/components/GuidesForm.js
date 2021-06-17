import React from "react";
import Modal from "./Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Nottinghilllaw
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper1: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function GuidesForm({pdf}) {
  const classes = useStyles();

  return (
    <Modal buttonTxt="Download Guide">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper1}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h6">
            Fill The Form To Download Guides
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              type="text"
              id="firstName"
              size="small"
              autoComplete="fname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              size="small"
              id="lastName"
              autoComplete="lname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Buisness Email"
              name="email"
              size="small"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="companyName"
              label="Company Name"
              type="text"
              id="companyName"
              size="small"
              autoComplete="company"
            />
            <a href={pdf} download="VisaGuides">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <i class="fa fa-download mr-2"></i>
                Download Guide For Free
              </Button>
            </a>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  {/* Forgot password? */}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={2}>
          <Copyright />
        </Box>
      </Container>{" "}
    </Modal>
  );
}

export default GuidesForm;
