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
        >
          Increment
        </Button>
        <Button
          classes="btn btn--reset"
          onClick={this.handleResetClick}
        >
          Reset
        </Button>
        <Button
          classes="btn btn--decrement"
          onClick={this.handleDecrementClick}
        >
          Decrement
        </Button>
      </div>
    );
  }
}

export default App;
