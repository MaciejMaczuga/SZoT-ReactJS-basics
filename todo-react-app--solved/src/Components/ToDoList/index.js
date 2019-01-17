import React, { PureComponent } from 'react';
import './style.css';

class ToDoList extends PureComponent {
  componentDidUpdate() {
    this.props.textInput.current.focus();
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.props.handleOnSubmit}
      >
        <input
          className="form__input"
          placeholder="Type your tasks"
          value={this.props.ongoingTask.text}
          onChange={this.props.handleOnChange}
          ref={this.props.textInput}
        />
        <button
          className="btn btn--add-task"
          type="submit"
        >
          Add task
        </button>
      </form>
    );
  }
}

export default ToDoList;