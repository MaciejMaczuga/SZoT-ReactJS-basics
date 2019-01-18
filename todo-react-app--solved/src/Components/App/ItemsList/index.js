import React from 'react';

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

export default ItemsList;
