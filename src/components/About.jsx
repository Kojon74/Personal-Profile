import React, { Component } from 'react'
import { Container, Col, Image, Carousel } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <Image className="yokohama-wallpaper" src="assets/Yokohama-wallpaper.jpg" />
        <div className="about-me-container">
          <div className="about-me"><span className="highlighted-text">Success</span> is achieved by  
            <span className="highlighted-text"> ordinary</span> people with <span className="highlighted-text">
            extrordinary</span> determination
          </div>
          <div className="details">My greatest assest is an exceptional determination to achieve my goals. As an older brother to three siblings, I work hard to provide support and guidance on their school work and extracurricular activities, even when I am half way accross the planet. I take this approach with me wherever I go, from leading cross country, tennis and robotics teams, to studying and working with colleagues. These tasks may be challenging and time consuming, but are always worth it to know I have pushed myself further to improve both myself and those around me.
          </div>
        </div>
        <Carousel className="about-carousel" controls={false} indicators={false} pauseOnHover={false} fade={true} slide={false}>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_9536_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_6240_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_1718_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_4971_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_1759_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_4764_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_1849_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_1890_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_0028_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_6180_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_2658_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_5496_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_1305_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_0066_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_6257_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_8583_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/Carousel/IMG_9535_Original.JPG" alt="ERROR"/>
            </Carousel.Item>
          </Carousel>
            
      </div>
    )
  }
}
