import React from 'react';
import ReactDom from 'react-dom';

export default class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li onClick={()=>this.props.toggleClick()}>
        <button className="submitbutton" onClick={()=>this.props.xClick()}>
          X
        </button>
        {this.props.task.completed ? <strike>{this.props.task.taskName}</strike> : this.props.task.taskText}
      </li>
    );
  }
}
