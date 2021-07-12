import React,{useState,useEffect} from "react";
import Modal from "./Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import { getGuides } from "../actions/guides";
import { checkAuthenticated } from "../actions/users";

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
    margin: theme.spacing(3, 0, 0),
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
function GuidesForm(props) {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (checkAuthenticated()) {
      setAuth(true);
    }
    else{
      setAuth(false)
    }
  });
  const [currency, setCurrency] = React.useState("2");
  const history = useHistory();
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Modal buttonTxt="Download" buttonTag={"guides"}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        {auth?(
          <div className={classes.paper1}>
            <Typography component="h1" variant="h6">
              Download Your Copy for free
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    size="small"
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
                    size="small"
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
                    size="small"
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
                    size="small"
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
                    size="small"
                    type="text"
                    id="websiteUrl"
                    autoComplete="url"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
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
                    size="small"
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

              <a href={props.pdf} download target="_blank">
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
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
        ):<h3 className="p-3">Please Login to download this guide</h3>}
        <Box mt={2}>
          <Copyright />
        </Box>
      </Container>
    </Modal>
  );
}

export default GuidesForm;
