import React from 'react';
import ReactDom from 'react-dom';
import Todo from './Todo.js'

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul>
        {this.props.todos.map( (task) => (<Todo task={task}/>) )}
      </ul>
    );
  }
}
