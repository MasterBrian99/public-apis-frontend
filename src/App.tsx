import React from "react";

import Home from "./screens/Home/Home";
import Category from "./screens/Category/Category";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CategoryScreen from "./screens/CategoryScreen/CategoryScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/category" component={Category} exact={true} />
        <Route path="/item" component={CategoryScreen} exact={true} />
        <Route path="/search" component={SearchScreen} exact={true} />
      </Switch>
    </Router>
  );
};

export default App;
