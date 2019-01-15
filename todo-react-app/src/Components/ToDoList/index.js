import React, { Component } from 'react';

class ToDoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Your task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit">Add task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoList;