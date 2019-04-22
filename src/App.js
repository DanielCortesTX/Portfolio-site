import React, { Component } from 'react';
import logo from './logo.svg';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';

import { getActiveSites } from './utils/_DATA'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeSites: '',
      loading: true
    }
  }
  componentDidMount(){
    getActiveSites()
      .then((activeSites) => {
        this.setState(() => ({
          activeSites,
          loading: false
        }))
      })
  }
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
        {this.state.loading && <h1>Loading</h1>}
        {!this.state.loading && <Projects />}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
