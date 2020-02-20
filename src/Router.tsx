import React from "react";

import Home from "./App";
import SignIn from "./SignIn/Sign";
import Profile from "./components/Profile/Profile";

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple";

const lightTheme = createMuiTheme({
  palette: {
    primary: purple,

    secondary: {
      main: "#f44336"
    }
  }
});

const customHistory = createBrowserHistory();

export default (
  <Router history={customHistory}>
    <ThemeProvider theme={lightTheme}>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/profile" component={Profile} />
    </ThemeProvider>
  </Router>
);
