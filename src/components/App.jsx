import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation> */}
          <Switch>
            <Route path="/" component={Counter} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
