import React, { Component } from 'react';
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Loading from './components/misc/Loading'
import Skills from './components/Skills'
import './styles/App.scss'
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
      <div>
        <About />
        <Skills />
        {this.state.loading && <Loading />}
        {!this.state.loading && <Projects sites={this.state.activeSites}/>}
        <Footer />
      </div>
    );
  }
}

export default App;
