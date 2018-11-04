import React, { StatelessComponent } from "react";
import { connect } from "react-redux";
import { Route, RouteProps, Redirect } from "react-router-dom";

interface IProps extends RouteProps {
  component: StatelessComponent<any>;
  isAuthenticated: Boolean;
}

const ProtectedRoute: StatelessComponent<IProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const connectStateToProps = (state: any) => {
  const {
    User: { profile }
  } = state;
  return {
    isAuthenticated: !!profile
  };
};

export default connect(connectStateToProps)(ProtectedRoute);
