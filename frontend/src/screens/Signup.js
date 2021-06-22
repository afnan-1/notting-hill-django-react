import React from 'react'
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
function Signup() {
    return (
        <>
        {/* <Header /> */}
        <div
          className="authHeaderColor text-center p-4"
        //   style={{ paddingTop: "130px" }}
        >
          <h2
            className="text-light"
            style={{ textTransform: "none", fontWeight: "400" }}
          >
            Create new Account
          </h2>
          <Link to="/login" className="text-light"> Already Registered? Login</Link>{" "}
        </div>
        <div className="">
          <div className="px-5 col-md-6 col-sm-12 mx-auto">
            <Grid container direction="column">
              <form>
              <div class="form-group">
                  <label
                    className="mb-1 mt-4 text-uppercase"
                    for="name"
                    style={{ fontSize: "12px" }}
                  >
                    Please enter your name
                  </label>
                  <input
                    type="text"
                    style={{ borderRadius: "20px" }}
                    className="form-control bg-light border-0 py-2 px-4"
                    id="name"
                    aria-describedby="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group">
                  <label
                    className="mb-1 text-uppercase"
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
                <div class="form-group">
                  <label
                    className="mb-1 text-uppercase"
                    for="name"
                    style={{ fontSize: "12px" }}
                  >
                    Please enter your date of birth
                  </label>
                  <input
                    type="date"
                    style={{ borderRadius: "20px" }}
                    className="form-control bg-light border-0 py-2 px-4"
                    id="dateofbirth"
                    aria-describedby="dateofbirth"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" class="btn btn-custom mx-auto">
                    Sign Up
                  </button>
                </div>
              </form>
            </Grid>
          </div>
        </div>
      </>
    )
}

export default Signup
