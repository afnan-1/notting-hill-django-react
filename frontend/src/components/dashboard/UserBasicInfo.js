import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../Header";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CountrySelector from "./CountrySelector";
import EditLocationIcon from "@material-ui/icons/EditLocation";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0, 0, 0, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: theme.spacing(1, 5),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserBasicInfo() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [value1, setValue1] = React.useState();

  const [currency, setCurrency] = React.useState("EUR");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <div className={`${classes.paper}`}>
          <form className={classes.form} noValidate>
            <label className="text-muted">
              Enter your details as they appear on your identification document.
            </label>
            <Grid container spacing={2} className="mt-1">
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fullname"
                  name="fullname"
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="outlined"
                    inputVariant="outlined"
                    fullWidth
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <CountrySelector />
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Phone #
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange("amount")}
                    startAdornment={
                      <InputAdornment position="start">
                        <PhoneInput
                          defaultCountry="GB"
                          international
                          placeholder="Enter phone number"
                          value={value1}
                          onChange={setValue1}
                        />
                      </InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="tinNo"
                  label="TIN No"
                  type="text"
                  id="tinno"
                  autoComplete="Tinno   "
                />
              </Grid>
              <Grid item xs={8}>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Phone #
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange("amount")}
                    endAdornment={
                      <InputAdornment position="end">
                        <EditLocationIcon color="primary" />
                      </InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="postalCode"
                  label="Postal Code"
                  type="text"
                  id="postalCode"
                  autoComplete="postalcode"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="text"
                  id="city"
                  autoComplete="city"
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
