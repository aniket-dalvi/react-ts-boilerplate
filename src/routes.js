import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./screens/home";
import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";

const routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/screen1" component={Screen1}/>
      <Route path="/screen2" component={Screen2}/>
    </Switch>
  </Router>
);

export default routes;
