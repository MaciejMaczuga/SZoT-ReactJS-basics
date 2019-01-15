import React, { Component } from 'react';

import Display from '../Display';
import Button from '../Button';
import './style.css';

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
      count: this.state.count -1,
    });
  }

  onResetClick = () => {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div className="counter">
        <Display
          counterValue={this.state.count}
        />
        <Button
          classes="btn btn--increment"
          handleClick={this.onIncrementClick}
          buttonContent="increment"
        />
        <Button
          classes="btn btn--decrement"
          handleClick={this.onDecrementClick}
          buttonContent="decrement"
        />
        <Button
          classes="btn btn--reset"
          handleClick={this.onResetClick}
          buttonContent="reset"
        />
      </div>
    );
  }
}

export default Counter;
