import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { NavBar } from "../components/NavBar";

export const AppRouters = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};
