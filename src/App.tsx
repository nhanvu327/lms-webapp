import React, { Component, Suspense } from "react";
import { Spin } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login } from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
