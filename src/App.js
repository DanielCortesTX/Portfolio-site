import React, { Component } from 'react';
import logo from './logo.svg';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Daniel's portfolio
          </p>
        </header>
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
