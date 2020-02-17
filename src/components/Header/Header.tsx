import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExitToApp from "@material-ui/icons/ExitToApp";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import './Header.scss'

const useStyles = makeStyles((theme: { zIndex: { drawer: number } }) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  pinnedIcon: {
    transform: "rotate(-45deg)",

    "&:hover, &:focus": {
      transform: "rotate(0deg)"
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className="header__toolbar">
          <Typography variant="h6" noWrap>
            ☕ Coffee
          </Typography>

          <Button variant="outlined" color="default" startIcon={<ExitToApp />}>
            LOGOUT
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
