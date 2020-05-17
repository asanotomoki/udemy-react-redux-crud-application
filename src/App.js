import React, { Component } from "react";

class App extends Component {
  render() {
    const gree = "it's a small world";
    const dom = <p className="foo">{gree}</p>;
    return(
      <input
        type="text"
        onChange={() => {
          alert("MY name is");
        }}
      />
    );
  }
}

export default App;
