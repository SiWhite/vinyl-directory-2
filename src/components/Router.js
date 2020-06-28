import React from "react";
import App from "./App";
// import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      {/* <Route exact path="/inventory" component={Dashboard}></Route> */}
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
