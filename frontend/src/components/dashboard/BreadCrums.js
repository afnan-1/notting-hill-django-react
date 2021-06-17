import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { NavLink, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { Add } from "@material-ui/icons";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { Grid, Button } from "@material-ui/core";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Add /> Create New Document
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Browse Templates</MenuItem>
    </Menu>
  );
  return (
    <>
      <Grid container>
        <Grid item sm={10}>
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
            {history.location.pathname === "/dashboard/documents" && (
              <NavLink
                color="inherit"
                to="/dashboard/documents"
                className={`${classes.link} p-2`}
                activeClassName="text-dark bg-light rounded"
              >
                <InsertDriveFileIcon className={classes.icon} />
                Documents
              </NavLink>
            )}

            {/* <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Breadcrumb
      </Typography> */}
          </Breadcrumbs>
        </Grid>
        <Grid item sm={2} className="p-2" style={{ backgroundColor: "#fff" }}>
          {history.location.pathname === "/dashboard/documents" && (
            <Button
              variant="contained"
              edge="end"
              color="primary"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              startIcon={<Add />}
            >
              Create
            </Button>
          )}
        </Grid>
      </Grid>

      {renderMenu}
    </>
  );
}
