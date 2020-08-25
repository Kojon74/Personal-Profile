import React, { Component } from 'react'
import { Container, Col, Image, Carousel } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <Parallax className="parallax" bgImage={require("./../assets/Backgrounds/Yokohama-wallpaper.jpg")} strength={900}>
          <div className="parallax-content">ABOUT ME</div>
        </Parallax>
        <div className="left">
          I grew up in Japan and am now studying Computer Engineering at the University of British Columbia. Some of my interests within computer engineering include: data science and AI, frontend and backend web development, and mobile app development, however I am always interested in learning about new topics within the field. Outside classes I am invested in the stock market and like staying active by running, playing tennis and skateboarding.
        </div>
        <div className="right">
          
        </div>
        </div>
    )
  }
}