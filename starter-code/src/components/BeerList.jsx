import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      <div className="beerList">
        {this.state.beers.map(e => {
          return (
            <p>
              <Link to={"/beers/" + e._id}>
                <img src={e.image_url} alt={"Image of " + e.name} />
              </Link>

              {e.name}
              {e.tagline}
              {e.contributed_by}
            </p>
          );
        })}
      </div>
    );
  }
}
