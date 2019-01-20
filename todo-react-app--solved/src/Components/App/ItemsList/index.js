import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ItemsList = (props) => {
  const renderItems = items => items.map(item => {
    return (
      <li
        className="task-item"
        key={item.key}
      >
        <button className="btn btn--task">{item.text}</button>
        <button
          className="btn btn--delete"
          onClick={() => props.onClick(item.key)}
        >
          delete
        </button>
      </li>
    );
  })

  return (
    <ul className="tasks-container">
      {renderItems(props.formEntries)}
    </ul>
  );
};

ItemsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  formEntries: PropTypes.array.isRequired,
}

export default ItemsList;
