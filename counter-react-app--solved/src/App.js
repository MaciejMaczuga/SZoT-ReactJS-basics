import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  state = {
    count: 0,
  }

  onIncrementClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  onDecrementClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  onResetClick = () => {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <div className="counter__display">{this.state.count}</div>
        <button
          className="btn btn--increment"
          onClick={this.onIncrementClick}
        >
          increment
        </button>
        <button
          className="btn btn--decrement"
          onClick={this.onDecrementClick}
        >
          decrement
        </button>
        <button
          className="btn btn--reset"
          onClick={this.onResetClick}
        >
          reset
        </button>
      </div>
    );
  }
}

export default Counter;
