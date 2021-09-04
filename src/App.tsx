import React from "react";

import Home from "./screens/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </Router>
  );
};

export default App;
