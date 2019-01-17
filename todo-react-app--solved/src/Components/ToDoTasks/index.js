import React from 'react';
import './style.css';

const ToDoTasks = (props) => {
  const createTasks = tasks => tasks.map(task => {
    return (
      <li
        className="task-item"
        key={task.key}
      >
        <button className="btn btn--task">{task.text}</button>
        <button
          className="btn btn--delete"
          onClick={() => props.handleDeleteTask(task.key)}
        >
          delete
        </button>
      </li>
    );
  })

  return (
    <ul className="tasks-container">
      {createTasks(props.taskEntries)}
    </ul>
  );
};

export default ToDoTasks;