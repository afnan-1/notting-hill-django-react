import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../static/auth.css";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { login } from "../store/actions/userActions";
function Login({ location }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    document.title = "Login / Notting Hill Law"

    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, dispatch]);
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };
  return (
    <>
      {loading && <LinearProgress color="secondary" />}
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
        <br />
        <Link to="/forgot-password" className="text-light">
          {" "}
          Forgot password
        </Link>{" "}
      </div>
      <div>
        <div className="px-5 col-md-6 col-sm-12 mx-auto">
          {error && (
            <Alert className="mt-2" severity="error">
              {error}
            </Alert>
          )}

          <Grid container direction="column">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label
                  className="mb-1 mt-4 text-uppercase"
                  htmlFor="exampleInputEmail1"
                  style={{ fontSize: "12px" }}
                >
                  Please enter your email
                </label>
                <input
                  type="email"
                  style={{ borderRadius: "20px" }}
                  className="form-control bg-light border-0 py-2 px-4"
                  id="exampleInputEmail1"
                  onChange={handleChange}
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label
                  className="text-uppercase"
                  style={{ fontSize: "12px" }}
                  htmlFor="exampleInputPassword1"
                >
                  please enter your password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control bg-light border-0 py-2 px-4 "
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-custom mx-auto">
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
