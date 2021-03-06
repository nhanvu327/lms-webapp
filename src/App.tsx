import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./helpers/configReduxStore";
import { theme, ThemeProvider } from "./theme";
import { Home, Login, Register } from "./routes";
import { LanguageProvider, ErrorBoundary } from "./containers";
import { CustomSpinner } from "./components";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <LanguageProvider>
            <ErrorBoundary>
              <Router>
                <Suspense
                  fallback={<CustomSpinner isFullScreen={true} size="large" />}
                >
                  <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <ProtectedRoute exact path="/" component={Home} />
                  </Switch>
                </Suspense>
              </Router>
            </ErrorBoundary>
          </LanguageProvider>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
