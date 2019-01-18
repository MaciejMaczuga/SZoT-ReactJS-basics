import React, { PureComponent, createRef } from 'react';

import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import { mockupTaskList } from '../../Utilities/data';
import './style.css';

class App extends PureComponent {
  state = {
    tasks: [],
    currentTask: {
      text: '',
      key: '',
    }
  }
  inputElement = createRef();

  componentWillMount() {
    const catchedTaskList = localStorage.getItem('ToDoList');
    if(catchedTaskList) {
      this.setState({
        tasks: JSON.parse(catchedTaskList),
      });
    }
  }

  handleInputChange = event => {
    const taskText = event.target.value;
    const currentTask = {
      text: taskText,
      key: Date.now(),
    }
    this.setState({
      currentTask,
    });
  }

  addTask = event => {
    event.preventDefault();
    const newTask = this.state.currentTask;
    if(newTask.text !== '') {
      const tasks = [...this.state.tasks, newTask];
      this.setState({
        tasks,
        currentTask: {
          text: '',
          key: '',
        }
      });
      localStorage.setItem('ToDoList', JSON.stringify(tasks));
    }
  }

  deleteTask = key => {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.key !== key
    });
    this.setState({
      tasks: filteredTasks,
    })
    localStorage.setItem('ToDoList', JSON.stringify(filteredTasks));
  }

  render() {
    return (
      <div className="main-container">
        <AddItemForm
          onChange={this.handleInputChange}
          onSubmit={this.addTask}
          ongoingTask={this.state.currentTask}
          textInput={this.inputElement}
        />
        <ItemsList
          formEntries={this.state.tasks}
          onClick={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
