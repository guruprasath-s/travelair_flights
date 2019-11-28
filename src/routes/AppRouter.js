import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import Home from "../components/Home";
import CheckIn from "../components/CheckIn";
import InFlight from "../components/InFlight";
import "bootstrap/dist/css/bootstrap.css";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/inflight">
                In Flight
              </NavLink>
            </NavItem>
          </Nav>
        </header>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/checkin/:flightid" component={CheckIn} />
          <Route path="/inflight" component={InFlight} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export { AppRouter as default };
