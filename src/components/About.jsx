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
          <div className="details">I believe that my greatest asset comes with my exceptional determination to achieve my goals. As an older brother to three siblings, I try as hard as I can to help them with school and extra curricular activities even when I am half-way accross the planet, by giving them advice from the mistakes I have made as well as my success, so that they can do better than I did. I try and take this approach with me wherever I go, from leading cross country, tennis and robotics teams, to studying/hanging out with my friends. Completing these tasks are often very challenging and time consuming, but at the end of the day, it is always worth it to have known I pushed myself a little further to improve myself and those around me.
          </div>
        </div>
        <Carousel className="about-carousel" controls={false} indicators={false} pauseOnHover={false}>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_9536_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_6240_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_1718_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_4971_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_1759_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_4764_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_1849_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_1890_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_0028_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_6180_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_2658_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_5496_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_1305_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_0066_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_6257_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_8583_Original.JPG"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="about-carousel-images" src="assets/carousel/IMG_9535_Original.JPG"/>
            </Carousel.Item>
          </Carousel>
            
      </div>
    )
  }
}
