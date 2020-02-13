import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { Spring } from 'react-spring'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
        
      <div className="home-section" id="home">
        <Image src="assets/desk-pic.jpg" className="desk-pic" />
        <h2 className="name">Ken Johnson</h2>
        <p className="intro">Computer Engineering Student - Software Developer</p>
      </div>   
    )
  }
}
