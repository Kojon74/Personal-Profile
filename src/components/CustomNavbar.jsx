import React, { Component } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-section" collapseOnSelect>
          
        <Nav.Item>
          <Nav.Link className="ken-johnson" href="/" eventKey="1">Ken Johnson</Nav.Link>
        </Nav.Item>
        <div className="nav-links-container">
          <Link className="nav-links-navbar" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
          <Link className="nav-links-navbar" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          <Link className="nav-links-navbar" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
          <Link className="nav-links-navbar" activeClass="active" to="Contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
        </div>
            
        <a href="https://www.linkedin.com/in/ken-john/" target="_blank">
          <Image src="assets/linkedin.png" className="icons-navbar"/>
        </a>
        <a href="https://github.com/Kojon74" target="_blank">
          <Image src="assets/github.png" className="icons-navbar"/>
        </a>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </Navbar>
    )
  }
}




