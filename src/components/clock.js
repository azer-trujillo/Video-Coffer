import React, { Component } from "react";
import moment, { duration } from "moment";
import { app } from "firebase";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new moment().format("LTS").toLocaleString() };
  }

  tick() {
    this.setState({ time: new moment().format("LTS").toLocaleString() });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
    //setInterval(() => currentTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <h6 style={{ textAlign: "right" }}>{this.state.time}</h6>;
  }
}

export default Clock;
