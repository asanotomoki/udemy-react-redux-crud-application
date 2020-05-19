import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButtton = () => {
    this.setState({count : this.state.count +1 })
  }

  handleMinasButtton = () => {
    this.setState({count : this.state.count -1 })
  }
  
  render() {
    return (
      <div>
        <h1>  {this.state.count}</h1>
        <button onClick={this.handlePlusButtton}>+1</button>
        <button onClick={this.handleMinasButtton}>-1</button>
      </div>
    );
  }
}

export default App;
