import React from 'react';
import logo from './logo.svg';
import MessengerCustomerChat from './components/MessengerCustomerChat.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Nike shoe room!
        </a>
      </header>
      <MessengerCustomerChat 
        pageId="106408207367910"
          appId="404189449639410"
      />
    </div>
  );
}

export default App;
