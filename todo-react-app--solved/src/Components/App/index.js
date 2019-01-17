import React, { PureComponent, createRef } from 'react';

import ToDoList from '../ToDoList';
import ToDoTasks from '../ToDoTasks';
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
    const catchedTaskList = localStorage.getItem('toDoList');
    if(catchedTaskList) {
      this.setState({
        tasks: JSON.parse(catchedTaskList),
      });
    }

    // const mockupTaskList = [
    //   {
    //   text: "Go sleep well",
    //   key: 1,
    //   },
    //   {
    //     text: "Wake up early",
    //     key: 2,
    //   },
    //   {
    //     text: "Eat breakfast",
    //     key: 3,
    //   },
    //   {
    //     text: "Go to work and have fun",
    //     key: 4,
    //   },
    // ];
    // this.setState({
    //   tasks: mockupTaskList,
    // });
  }

  handleInput = event => {
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
      localStorage.setItem('toDoList', JSON.stringify(tasks));
    }
  }

  deleteTask = key => {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.key !== key
    });
    this.setState({
      tasks: filteredTasks,
    })
    localStorage.setItem('toDoList', JSON.stringify(filteredTasks));
  }

  render() {
    return (
      <div className="main-container">
        <ToDoList
          handleOnChange={this.handleInput}
          handleOnSubmit={this.addTask}
          ongoingTask={this.state.currentTask}
          textInput={this.inputElement}
        />
        <ToDoTasks
          taskEntries={this.state.tasks}
          handleDeleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
