import React, { Component, Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme, ThemeProvider } from "./theme";
import { Home, Login } from "./routes";
import { LanguageProvider } from "./containers";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <Router>
            <Suspense fallback={<Spin />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Suspense>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
