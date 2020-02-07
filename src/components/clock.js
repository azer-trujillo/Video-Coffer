import React from "react";
import moment from "moment";
import "../styles/clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new moment().format("LLL").toLocaleString() };
  }

  tick() {
    this.setState({ time: new moment().format("LLL").toLocaleString() });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <h6 className="clock">{this.state.time}</h6>;
  }
}

export default Clock;
