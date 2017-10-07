import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';
const dbUrl = "http://localhost:3000/db"
import axios from "axios"
var dummyData = [{taskText: "Clean the house", completed: false}, {taskText: "Feed the dog", completed: true}, {taskText: "Pay bills", completed: false}];

export default class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  addTodo(task){
    var self = this;
    axios.post(`${dbUrl}/add`, {
      method: 'POST',
      data:{
        task:task
      }
    })
      .then(function (response) {
        console.log("Response",response.data);
        self.setState({
          todos: self.state.todos.concat(response.data)
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  removeTodo(index){
    dummyData.splice(index,1);
    this.setState({
      todos: dummyData
    });
  }

  toggleTodo(index){
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({
      todos: dummyData
    });
  }

  render(){
    return(
      <div>
        <InputLine submit={(taskName)=>this.addTodo(taskName)}/>
        <TodoList todos={this.state.todos} todoXClick={(index)=>this.removeTodo(index)} todoToggleClick={(index)=>this.toggleTodo(index)}/>
      </div>
    );
  }
}
