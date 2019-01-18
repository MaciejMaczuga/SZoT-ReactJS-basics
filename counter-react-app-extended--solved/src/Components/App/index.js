import React, { Component } from 'react';

import Display from './Display';
import Button from './Button';
import './style.css';

class App extends Component {
  state = {
    count: 0,
  }

  handleIncrementClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrementClick = () => {
    this.setState({
      count: this.state.count -1,
    });
  }

  handleResetClick = () => {
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
          onClick={this.handleIncrementClick}
          buttonContent="increment"
        />
        <Button
          classes="btn btn--decrement"
          onClick={this.handleDecrementClick}
          buttonContent="decrement"
        />
        <Button
          classes="btn btn--reset"
          onClick={this.handleResetClick}
          buttonContent="reset"
        />
      </div>
    );
  }
}

export default App;
