import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
function NewPassword() {
  return (
    <div>
      <div
        className="authHeaderColor text-center p-4"
      >
        <h2
          className="text-light"
          style={{ textTransform: "none", fontWeight: "400" }}
        >
          Reset Password
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
                  for="password"
                  style={{ fontSize: "12px" }}
                >
                  Please enter password
                </label>
                <input
                  type="password"
                  style={{ borderRadius: "20px" }}
                  class="form-control bg-light border-0 py-2 px-4"
                  id="password"
                  aria-describedby="password"
                  placeholder="Enter Password"
                />
              </div>
              <div class="form-group">
                <label
                  className="mb-1 mt-4 text-uppercase"
                  for="confirmpassword"
                  style={{ fontSize: "12px" }}
                >
                  Please re-enter password
                </label>
                <input
                  type="password"
                  style={{ borderRadius: "20px" }}
                  class="form-control bg-light border-0 py-2 px-4"
                  id="confirmpassword"
                  aria-describedby="confirmpassword"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="text-center">
                <button type="submit" class="btn btn-custom mx-auto">
                  Reset
                </button>
              </div>
            </form>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
