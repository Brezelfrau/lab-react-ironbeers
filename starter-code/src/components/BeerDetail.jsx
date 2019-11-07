import React, { Component } from "react";
import axios from "axios";

export default class BeerDetail extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    axios
      .get(
        "https://ih-beers-api2.herokuapp.com/beers/" +
          this.props.match.params.beerId
      )
      .then(response => {
        this.setState({ beer: response.data });
      });
  }
  render() {
    console.log(this.state.beer);
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}
