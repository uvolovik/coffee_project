import ReactDOM from "react-dom";

import React from "react";

import "./index.scss";
import "font-awesome/css/font-awesome.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

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
        <App/>
    </ThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
