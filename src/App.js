import "./App.css";

import React, { Component } from "react";
import UserInput from "./components/userinput";
import UserOutput from "./components/useroutput";

class App extends Component {
  state = {
    user: "default",
  };
  nameChangeHandler = (event) => {
    this.setState({ user: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>my first assignment</h1>
        <UserInput change={this.nameChangeHandler} value={this.state.user} />

        <UserOutput name={this.state.user} />
      </div>
    );
  }
}

export default App;
