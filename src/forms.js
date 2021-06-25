import React, { Component } from "react";
import Table from "./table";

const axios = require("axios");

class Grid extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  async componentDidMount() {
    const response = await axios.get("https://randomuser.me/api/?results=50");
    const results = response.data.results;
    const userDetails = results.map((res) => {
      return {
        name: res.name.first + " " + res.name.last,
        city: res.location.city,
        email: res.email,
        phone: res.phone,
        url: res.picture.thumbnail
      };
    });
    // console.log(userDetails);
    this.setState({ data: userDetails });
  }

  render() {
    return <Table data={this.state.data} />;
  }
}

export default Grid;
