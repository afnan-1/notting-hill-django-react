import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, LinearProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { forgotPassword } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const { loading, success, error } = userForgotPassword;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };
  return (
    <div>
      {loading && <LinearProgress color="secondary" />}

      <div className="authHeaderColor text-center p-4">
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
      <div>
        <div className="px-5 py-2 col-md-6 col-sm-12 mx-auto">
          {success && (
            <Alert severity="success">
              Reset password link has successfully send to your email
            </Alert>
          )}
          {error && (
            <Alert severity="error">
              No Active Account with this credentials
            </Alert>
          )}
          <Grid container direction="column">
            <form onSubmit={handleSubmit}>
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
                  required
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
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
