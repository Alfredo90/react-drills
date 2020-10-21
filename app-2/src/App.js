import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: ["salad", "ice cream", "chicken", "tacos"]
    };
  }

  render() {
    let foodShown = this.state.food.map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });

    return <div className="App">{foodShown}</div>;
  }
}

export default App;