import React from "react";
import { message } from "antd";
import * as Sentry from "@sentry/browser";
import { injectIntl, InjectedIntl } from "react-intl";

interface IProps {
  intl: InjectedIntl;
}

interface IState {
  hasError: Boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    message.error(JSON.stringify(errorInfo));
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if(!this.state.hasError) {
      return this.props.children;
    }
    return null
  }
}

export default injectIntl(ErrorBoundary);
