import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme, ThemeProvider } from "./theme";
import { Home, Login, Register } from "./routes";
import { LanguageProvider } from "./containers";
import { CustomSpinner } from "./components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <Router>
            <Suspense fallback={<CustomSpinner isFullScreen={true} size="large" />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </Suspense>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
