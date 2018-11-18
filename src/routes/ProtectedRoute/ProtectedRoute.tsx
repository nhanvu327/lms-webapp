import React, { StatelessComponent } from "react";
import { connect } from "react-redux";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { Dispatch } from "redux";
import { CustomSpinner } from "../../components";
import { saveProfile } from "../../actions/userActions";
import getProfileAPI from "../../api/getProfileAPI";

interface IProps extends RouteProps {
  component: StatelessComponent<any>;
  isAuthenticated: Boolean;
  dispatchSaveProfile: (data: any) => void;
}

class ProtectedRoute extends React.Component<IProps> {
  state = {
    isLoading: true
  };

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      try {
        const res = await getProfileAPI();
        this.props.dispatchSaveProfile(res.payload.profile);
        this.setState({
          isLoading: false
        });
      } catch (err) {
        this.setState({
          isLoading: false
        });
      }
    }
  }

  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : this.state.isLoading ? (
            <CustomSpinner isFullScreen={true} size="large" />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

const connectStateToProps = (state: any) => {
  const {
    User: { profile }
  } = state;
  return {
    isAuthenticated: !!profile
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchSaveProfile: (data: any) => dispatch(saveProfile(data))
  };
};

export default connect(
  connectStateToProps,
  mapDispatchToProps
)(ProtectedRoute);
