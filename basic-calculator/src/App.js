import React from 'react';
import logo from './logo.svg';
import Display from './Display';
import ButtonGrid from './ButtonGrid';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Display value="0" />
        <ButtonGrid />
      </div>
    );
  }
}

export default App;
