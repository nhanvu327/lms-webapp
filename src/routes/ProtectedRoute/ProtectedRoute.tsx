import React, { StatelessComponent } from "react";
import { Route, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
  component: StatelessComponent<any>
}

const ProtectedRoute: StatelessComponent<IProps> = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default ProtectedRoute;
