import React, { Component } from 'react';

import AddItemForm from './AddItemForm';
import ItemsList from './ItemList';
import User from './User';
import './style.css';
// import { mockupTaskList } from '../../Utilities/data';
// this commented import is mockup data you can put to your state.tasks

class App extends Component {
  state = {
    tasks: [],
    currentTask: {
      text: '',
      key: '',
    },
    loading: false,
    data: [],
    errorName: null,
    errorMessage: null,
  }

  componentWillMount() {
    const catchedTaskList = localStorage.getItem('ToDoList');
    if (catchedTaskList) {
      this.setState({
        tasks: JSON.parse(catchedTaskList),
      });
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });

    fetch('https://randomuser.me/api/?results=10')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(data => {
        this.setState({
          loading: false,
          data: data.results,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          errorName: error.name,
          errorMessage: error.message,
        });
      })
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
    if (newTask.text !== '') {
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
      return task.key !== key;
    });
    this.setState({
      tasks: filteredTasks,
    });
    localStorage.setItem('ToDoList', JSON.stringify(filteredTasks));
  }

  render() {
    return (
      <div className="main-container">
        <AddItemForm
          onChangeForm={this.handleInputChange}
          onSubmitForm={this.addTask}
          ongoingTask={this.state.currentTask}
        />
        <ItemsList
          formEntries={this.state.tasks}
          onClickDelete={this.deleteTask}
        />
        <h2>Tutaj już się zaczynają czary od Maćka :)</h2>
        {
          this.state.loading ?
            <div>Loading...</div> :
            <div>
              {this.state.data.map(item => (
                <User
                  key={item.login.uuid}
                  {...item}
                />
              ))}
            </div>
        }
      </div>
    );
  }
}

export default App;
