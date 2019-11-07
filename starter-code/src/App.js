import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import BeerList from "./components/BeerList";
import BeerDetail from "./components/BeerDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={"/beers"} component={BeerList} />
          <Route exact path={"/beers/:beerId"} component={BeerDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
