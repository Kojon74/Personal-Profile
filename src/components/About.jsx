import React, { Component } from 'react'
import { Container, Col, Image, Carousel } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image className="yokohama-wallpaper" src="assets/Yokohama-wallpaper.jpg" fluid />
        <div className="about-me-container">
          <div className="about-me">Leading by example</div>
          <div className="details">On top of being an older brother to my three siblings, I have had many opportunities 
            throughout my life to be able to influence others with the decisions they make. From being a robotics, cross 
            country and tennis team captain to friend, I believe that it is my responsibility to pass down my knowledge 
            to those around me so that they can succeed and learn from the mistakes I made. Being active with sports has 
            taught me a lot about determination and being able to stay calm and work through problems even in the toughest 
            situations. I was born and raised in Japan but moved to Canada to pursue a career in software development.
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
