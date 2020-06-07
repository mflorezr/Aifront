import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard'
import Driver1 from './Components/Dashboard/Drivers/Driver1'
import Driver2 from './Components/Dashboard/Drivers/Driver2'
import Driver3 from './Components/Dashboard/Drivers/Driver3'
import Driver4 from './Components/Dashboard/Drivers/Driver4'
import Driver5 from './Components/Dashboard/Drivers/Driver5'
import Driver6 from './Components/Dashboard/Drivers/Driver6'
import Driver7 from './Components/Dashboard/Drivers/Driver7'
import Driver8 from './Components/Dashboard/Drivers/Driver8'
import Driver9 from './Components/Dashboard/Drivers/Driver9'
import Driver10 from './Components/Dashboard/Drivers/Driver10'
import Driver11 from './Components/Dashboard/Drivers/Driver11'
import Driver12 from './Components/Dashboard/Drivers/Driver12'

const NotFound = () => <div>Not found page</div>;

const Router = () => {
  const someVariable = true;

  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route
        path="/dashboard"
        render={props => <Dashboard />}
      />
      <Route
        path="/driver/1"
        render={props => <Driver1 />}
      />
      <Route
        path="/driver/2"
        render={props => <Driver2 />}
      />
      <Route
        path="/driver/3"
        render={props => <Driver3 />}
      />
      <Route
        path="/driver/4"
        render={props => <Driver4 />}
      />
      <Route
        path="/driver/5"
        render={props => <Driver5 />}
      />
      <Route
        path="/driver/6"
        render={props => <Driver6 />}
      />
      <Route
        path="/driver/7"
        render={props => <Driver7 />}
      />
      <Route
        path="/driver/8"
        render={props => <Driver8 />}
      />
      <Route
        path="/driver/9"
        render={props => <Driver9 />}
      />
      <Route
        path="/driver/10"
        render={props => <Driver10 />}
      />
      <Route
        path="/driver/11"
        render={props => <Driver11 />}
      />
      <Route
        path="/driver/12"
        render={props => <Driver12 />}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;