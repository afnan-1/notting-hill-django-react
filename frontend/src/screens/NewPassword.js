import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, LinearProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../store/actions/userActions";

function NewPassword({ location, history }) {
  document.title = "New Password / Notting Hill Law"
  const dispatch = useDispatch();
  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading, error, success } = userResetPassword;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const token = location.search.slice(7);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(resetPassword(password, token));
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("your password did not match");
    }
  };
  return (
    <div>
      {loading && <LinearProgress color="secondary" />}
      <div className="authHeaderColor text-center p-4">
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
        <div className="px-5 py-2 col-md-6 col-sm-12 mx-auto">
          {success && (
            <Alert severity="success">
              Your password has successfully reset.
            </Alert>
          )}
          <span className="d-none">
            {success &&
              setTimeout(() => {
                history.push("/login");
              }, 1000)}{" "}
          </span>
          {error && <Alert severity="error">{error}</Alert>}
          <Grid container direction="column">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label
                  className="mb-1 mt-4 text-uppercase"
                  for="password"
                  style={{ fontSize: "12px" }}
                >
                  Please enter new password
                </label>
                <input
                  type="password"
                  style={{ borderRadius: "20px" }}
                  class="form-control bg-light border-0 py-2 px-4"
                  id="password"
                  aria-describedby="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label
                  className="mb-1 mt-4 text-uppercase"
                  for="confirmpassword"
                  style={{ fontSize: "12px" }}
                >
                  Please re-enter new password
                </label>
                <input
                  type="password"
                  style={{ borderRadius: "20px" }}
                  class="form-control bg-light border-0 py-2 px-4"
                  id="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
