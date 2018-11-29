import React, { Component } from "react";
import { render } from "react-dom";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
