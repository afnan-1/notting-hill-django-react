import React from "react";
import Modal from "./Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";

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

const currencies = [
  {
    value: "2",
    label: "2",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "More then 6",
    label: "More then 6",
  },
];
function GuidesForm({ pdf }) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("2");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Modal buttonTxt="Download" buttonTag={"guides"}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper1}>
          <Typography component="h1" variant="h6">
            Download Your Copy for free
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="firstName"
                  label="First Name"
                  type="text"
                  id="firstName"
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  type="text"
                  id="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Buisness Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="companyName"
                  label="Company Name"
                  type="text"
                  id="companyName"
                  autoComplete="company"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="websiteUrl"
                  label="Website Url"
                  type="text"
                  id="websiteUrl"
                  autoComplete="url"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  required
                  name="phoneNumber"
                  label="Phone Number"
                  type="text"
                  id="phoneNumber"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="How many employees work there?"
                  fullWidth
                  required
                  // defaultValue="Please Select"
                  value={currency}
                  onChange={handleChange}
                  helperText="Please select"
                  variant="outlined"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <a href={pdf} download="VisaGuides">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <i class="fa fa-download mr-2"></i>
                Download
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
