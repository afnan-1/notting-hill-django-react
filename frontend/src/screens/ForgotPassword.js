import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
function ForgotPassword() {
  return (
    <div>
      <div
        className="authHeaderColor text-center p-4"
        // style={{ paddingTop: "130px" }}
      >
        <h2
          className="text-light"
          style={{ textTransform: "none", fontWeight: "400" }}
        >
          Forgot Password
        </h2>
        <Link to="/signup" className="text-light">
          {" "}
          New Password
        </Link>{" "}
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
              </div>

              <div className="text-center">
                <button type="submit" class="btn btn-custom mx-auto">
                  Send
                </button>
              </div>
            </form>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
