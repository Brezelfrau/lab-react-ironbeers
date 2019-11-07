import React, { Component } from "react";
import axios from "axios";

export default class BeerDetail extends Component {
  state = {
    beer: undefined,
    Loading: true
  };

  componentDidMount() {
    axios
      .get(
        "https://ih-beers-api2.herokuapp.com/beers/" +
          this.props.match.params.beerId
      )
      .then(response => {
        this.setState({ beer: response.data, Loading: false });
      });
  }
  render() {
    if (this.state.Loading) {
      return <h1>Loading....</h1>;
    }
    return (
      <div>
        <p>
          <img
            src={this.state.beer.image_url}
            alt={"Image of " + this.state.beer.name}
          />

          {this.state.beer.name}
          {this.state.beer.tagline}
          {this.state.beer.contributed_by}
        </p>
      </div>
    );
  }
}
