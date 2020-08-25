import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-section" id="home">
        <div className="intro">
          <div className="name">KEN JOHNSON</div>
          <div className="desc">WELCOME TO MY ONLINE HOME</div>
        </div>
        <Link className="learn-more" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={1000}>LEARN MORE<br></br>⌵</Link>
      </div>   
    )
  }
}