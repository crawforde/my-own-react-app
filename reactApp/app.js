import React from 'react';
import ReactDom from 'react-dom';


var dummyData = ["Clean the house", "Feed the dog", "Pay bills"];


class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        {this.props.task}
        <button className="submitbutton">
          Complete
        </button>
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
        {dummyData.map( (task) => (<Todo task={task}/>) )}
      </ul>
    );
  }
}

ReactDom.render(<TodoList/>,
document.getElementById('root'));
