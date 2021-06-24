import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import "../static/auth.css";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { checkAuthenticated, login } from "../actions/users";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";

function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    err: false,
    errMsg: "",
  });
  const [loader, setLoader] = useState(false);

  useEffect(() => {
   if (checkAuthenticated()){
     history.push('/')
   }
  }, [])
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    login(credentials).then((response) => {
      if (response.status === 200) {
        history.push("/");
        setError({ err: false });
        setLoader(false);
      } else {
        setLoader(false);
        setError({ err: true, errMsg: response });
      }
    });
  };
  return (
    <>
      <Header />
      {loader && <LinearProgress color="secondary" />}
      <div
        className="authHeaderColor text-center p-4"
        // style={{ paddingTop: "130px" }}
      >
        <h2
          className="text-light"
          style={{ textTransform: "none", fontWeight: "400" }}
        >
          Login
        </h2>
        <Link to="/signup" className="text-light">
          {" "}
          Dont have an account? Sign up
        </Link>{" "}
      </div>
      <div>
        <div className="px-5 col-md-6 col-sm-12 mx-auto">
          {error.err && (
            <Alert className="mt-2" severity="error">
              {error.errMsg}
            </Alert>
          )}

          <Grid container direction="column">
            <form onSubmit={submitHandler}>
              <div class="form-group">
                <label
                  className="mb-1 mt-4 text-uppercase"
                  for="exampleInputEmail1"
                  style={{ fontSize: "12px" }}
                >
                  Please enter your email
                </label>
                <input
                  type="email"
                  style={{ borderRadius: "20px" }}
                  class="form-control bg-light border-0 py-2 px-4"
                  id="exampleInputEmail1"
                  onChange={handleChange}
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label
                  className="text-uppercase"
                  style={{ fontSize: "12px" }}
                  for="exampleInputPassword1"
                >
                  please enter your password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  class="form-control bg-light border-0 py-2 px-4 "
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="text-center">
                <button type="submit" class="btn btn-custom mx-auto">
                  Login
                </button>
              </div>
            </form>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Login;
