import React from "react";
import Header from "../components/Header";
import "../static/auth.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
function Login() {
  return (
    <>
      <Header />
      <div
        className="authHeaderColor text-center pb-3"
        style={{ paddingTop: "130px" }}
      >
        <h2
          className="text-light"
          style={{ textTransform: "none", fontWeight: "400" }}
        >
          Login
        </h2>
        <Link to="/signup" className="text-light"> Dont have an account? Sign up</Link>{" "}
      </div>
      <div className="">
        <div className="px-5 col-md-6 col-sm-12 mx-auto">
          <Grid container direction="column">
            <form>
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
