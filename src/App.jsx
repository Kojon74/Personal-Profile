import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
