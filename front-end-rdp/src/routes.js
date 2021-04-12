import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import LoginPage from "../src/pages/login_page/LoginPage";
import Admin from "./pages/admin/index_admin";
import Dashboard from "../src/pages/dash_page/dash_page";
import SendForgotPassword from "../src/pages/send_forgot_password/SendForgotPassword";
import ForgotPassword from "../src/pages/forgot_password/ForgotPassword";

import { isAuthenticated } from "./service/auth";

export default function Routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/sendemail" component={SendForgotPassword} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <PrivateRoute path="/admin" component={Admin} />

        <PrivateRoute path="/dash" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
