import React, { Component } from "react";
import { render } from "react-dom";
import AppRouter from "./routes/AppRouter";
import "./styles.css";

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

render(<App />, document.getElementById("root"));
