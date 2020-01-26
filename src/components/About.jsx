import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                  <Image src="assets/Yokohama-wallpaper.jpg" fluid className="yokohama-wallpaper" />
            </div>
        )
    }
}
