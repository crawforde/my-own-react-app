import React from 'react';
import ReactDom from 'react-dom';

export default class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      typedText:''
    };
  }


  handleTyping(event){
    this.setState({
      typedText: event.target.value
    });
  }

  handleSubmit(){
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ""
    });
  }

  render(){
    return (
      <div>
        <input type="text" placeholder="" value={this.state.typedText} onChange={(event)=>this.handleTyping(event)}></input>
        <button className="submitbutton" onClick={()=>this.handleSubmit()}>Submit</button>
      </div>
    )
  }
}
