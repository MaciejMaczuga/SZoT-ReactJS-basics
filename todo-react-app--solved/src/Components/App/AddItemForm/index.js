import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class AddItemForm extends PureComponent {
  inputElement = createRef();

  componentDidUpdate() {
    this.inputElement.current.focus();
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
          ref={this.inputElement}
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

AddItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  ongoingTask: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default AddItemForm;
