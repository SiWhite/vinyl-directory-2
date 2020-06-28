import React from "react";
import App from "./App";
import Inventory from "./Inventory";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/inventory" component={Inventory}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
