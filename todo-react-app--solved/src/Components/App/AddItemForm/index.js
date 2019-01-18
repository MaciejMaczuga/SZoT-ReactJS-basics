import React, { PureComponent } from 'react';

import './style.css';

class AddItemForm extends PureComponent {
  componentDidUpdate() {
    this.props.textInput.current.focus();
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.props.onSubmit}
      >
        <input
          className="form__input"
          placeholder="Type your tasks"
          value={this.props.ongoingTask.text}
          onChange={this.props.onChange}
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

export default AddItemForm;
