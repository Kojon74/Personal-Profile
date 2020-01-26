import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="bodyb">
                <div className="left-half">
                    <Link className="nav-links" to="/about" style={{ textDecoration: 'none' }}>About</Link>
                    <Link className="nav-links" to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
              
                    <a href="https://www.linkedin.com/in/ken-john/" target="_blank">
                        <Image src="assets/linkedin.png" className="icons"/>
                    </a>
                    <a href="https://github.com/Kojon74" target="_blank">
                        <Image src="assets/github.png" className="icons"/>
                    </a>

                    <p className="contact">kenjohnson0704@gmail.com</p>
                    
                    
                </div>
                <div className="right-half">
                    <Image src="assets/desk-pic.jpg" className="desk-pic" />
                    <h2 className="name">Ken Johnson</h2>
                    <p className="intro">Computer Engineering Student - Software Developer</p>
                    
                </div>
            </div>
            
            
        )
    }
}
