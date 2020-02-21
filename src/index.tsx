import ReactDOM from "react-dom";

import "./index.scss";
import "font-awesome/css/font-awesome.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import purple from "@material-ui/core/colors/purple";
import CssBaseline from "@material-ui/core/CssBaseline";

const lightTheme = createMuiTheme({
  palette: {
    primary: purple,

    secondary: {
      main: "#f44336"
    }
  }
});
ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Router />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
