import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { NavLink, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import DashboardIcon from "@material-ui/icons/Dashboard";

import PersonIcon from "@material-ui/icons/Person";
const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    color: "grey",
    "&:hover": {
      backgroundColor: "#f8f9fa",
      color: "black !important",
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function IconBreadcrumbs() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className="text-center pl-5 py-2 bg-white"
    >
      <NavLink
        to="/dashboard"
        exact
        className={`${classes.link} ml-5 p-2`}
        activeClassName="text-dark bg-light rounded"
      >
        <DashboardIcon className={classes.icon} />
        Dashboard
      </NavLink>
      {history.location.pathname === "/dashboard/profile" && (
        <NavLink
          color="inherit"
          to="/dashboard/profile"
          className={`${classes.link} p-2`}
          activeClassName="text-dark bg-light rounded"
        >
          <PersonIcon className={classes.icon} />
          Profile
        </NavLink>
      )}

      {/* <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Breadcrumb
      </Typography> */}
    </Breadcrumbs>
  );
}
