import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/CustomNavbar';
import Timeline from './components/MyTimeline'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Timeline} />
                    <Route exact path="/timeline" component={Timeline} />
                </div>
            </Router>
        );
    }
}

export default App;
