import React from "react";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/Sign";
import Profile from "./pages/Profile/Profile";

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

export default function MyRouter() {
  return (
    <Router history={customHistory}>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}
