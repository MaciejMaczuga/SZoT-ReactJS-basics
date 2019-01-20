import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class AddItemForm extends PureComponent {

  render() {
    return(
      <form
        className="form"
        onSubmit={this.props.onSubmitForm}
      >
        <input
          className="form__input"
          placeholder="Type your task"
          value={this.props.ongoingTask.text}
          onChange={this.props.onChangeForm}
        />
        <button
          className="btn btn--add-task"
          type="submit"
        >
          Add task
        </button>

      </form>
    )
  }
}

AddItemForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  ongoingTask: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
}

export default AddItemForm;
