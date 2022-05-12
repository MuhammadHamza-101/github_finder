import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Layout/Navbar";

class App extends Component {
  render() {
    const name = "hamza";
    const loading = false;

    return (
      <>
        <Navbar name={"Github Finder"} />
      </>
    );
  }
}

export default App;
