import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import "font-awesome/css/font-awesome.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";

ReactDOM.render(Router, document.getElementById("root"));

serviceWorker.unregister();
