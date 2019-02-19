import React, { Component } from 'react';
import logo from './pga_logo.png';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
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
            Learn React
          </a>
        </Header>
      </div>
    );
  }
}

export default App;
