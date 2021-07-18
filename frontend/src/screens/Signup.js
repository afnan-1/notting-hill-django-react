import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useHistory } from "react-router-dom";
import { Grid, LinearProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useDispatch,useSelector } from "react-redux";
import { register } from "../store/actions/userActions";
function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister)
  const {loading,error,user} = userRegister
  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  useEffect(() => {
   if (userInfo){
     history.push('/')
   }
  }, [userInfo,userLogin]);
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    date_of_birth: new Date(),
  });
  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData))
  };
  return (
    <>
      {loading && <LinearProgress color="secondary" />}

      
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
        <Link to="/login" className="text-light">
          {" "}
          Already Registered? Login
        </Link>{" "}
      </div>
      <div className="">
        <div className="px-5 py-2 col-md-6 col-sm-12 mx-auto">
        {userInfo && <Alert severity={"success"} >Registered successfully.</Alert>}
        {error && <Alert severity={"error"} >{error}</Alert>}
          <Grid container direction="column">
            <form onSubmit={handleSubmit}>
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
                  name="name"
                  required
                  onChange={handleChange}
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
                  required
                  style={{ borderRadius: "20px" }}
                  class="form-control bg-light border-0 py-2 px-4"
                  id="exampleInputEmail1"
                  name="email"
                  onChange={handleChange}
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
                  name="password"
                  required
                  onChange={handleChange}
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
                  required
                  style={{ borderRadius: "20px" }}
                  className="form-control bg-light border-0 py-2 px-4"
                  id="dateofbirth"
                  name="date_of_birth"
                  onChange={handleChange}
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
  );
}

export default Signup;
