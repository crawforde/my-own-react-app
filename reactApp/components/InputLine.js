import React from 'react';
import ReactDom from 'react-dom';

export default class InputLine extends React.Component{
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
