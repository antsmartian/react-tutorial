import React from 'react';
import logo from './logo.svg';
import Display from './Display';
import ButtonGrid from './ButtonGrid';
import styled from 'styled-components';
import calculate from "./calculateHelper"

const Calculator = styled.div `
  display : flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
`


class App extends React.Component {

  state = {
    total: null, 
    operation: null, 
    next: null
  }

  // 4 * 4 

  handleClick = name => {
    const obj = calculate(this.state, name);
    console.log(obj);
    this.setState(obj);
    // console.log("parent received an event from child")
    // this.setState()
  }

  render() {
    return (
      <Calculator>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonGrid clickHandler={this.handleClick}/>
      </Calculator>
    );
  }
}

export default App;
