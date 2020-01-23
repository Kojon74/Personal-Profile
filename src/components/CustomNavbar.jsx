import React, { Component } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar className="navbar" collapseOnSelect>
                
                <Nav.Item>
                    <Nav.Link className="ken-johnson" href="/" eventKey="1">Ken Johnson</Nav.Link>
                </Nav.Item>
                <Nav className="mr-auto">
                    <Navbar.Toggle />
                    <Link className="nav-buttons-navbar" to="/about" style={{ textDecoration: 'none' }}>About</Link>
                    <Link className="nav-buttons-navbar" to="/projects" style={{ textDecoration: 'none' }}>Projects</Link> 
                </Nav>
                    
                <a href="https://www.linkedin.com/in/ken-john/" target="_blank">
                    <Image src="assets/linkedin.png" className="icons-navbar"/>
                </a>
                <a href="https://github.com/Kojon74" target="_blank">
                    <Image src="assets/github.png" className="icons-navbar"/>
                </a>
            </Navbar>
        )
    }
}




