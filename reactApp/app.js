import React from 'react';
import ReactDom from 'react-dom';


var dummyData = [{taskText: "Clean the house", completed: false}, {taskText: "Feed the dog", completed: true}, {taskText: "Pay bills", completed: false}];


class InputLine extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <form>
        <input type="text" placeholder=""></input>
        <input type="submit"></input>
      </form>
    )
  }
}

class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <button className="submitbutton">
          X
        </button>
        {this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
      </li>
    );
  }
}

class TodoList extends React.Component {
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

class TodoApp extends React.Component {
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

  render(){
    return(
      <div>
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

ReactDom.render(<TodoApp/>,
document.getElementById('root'));
