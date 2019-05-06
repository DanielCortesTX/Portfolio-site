import React, { Component } from 'react';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/misc/Loading'
import Skills from './components/Skills'
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
        <About />
        <Skills />
        {this.state.loading && <Loading />}
        {!this.state.loading && <Projects sites={this.state.activeSites}/>}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
