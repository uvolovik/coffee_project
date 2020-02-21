import React from "react";
import { Link } from "react-router-dom";

import ExitToApp from "@material-ui/icons/ExitToApp";
import { Toolbar, Button, Typography, AppBar } from "@material-ui/core";

import useStyles from "./Header_scss";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.headerToolbar}>
          <Typography variant="h6" noWrap>
            <span role="img" aria-label="image coffee">☕</span> Coffee
          </Typography>

          <Link to="/login" className={classes.logoutButton}>
            <Button
              variant="outlined"
              color="default"
              startIcon={<ExitToApp />}
              aria-label="Logout"
            >
              LOGOUT
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
