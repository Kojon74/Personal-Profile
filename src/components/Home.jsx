import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Ken Johnson</h2>
                    <p>Second year Computer Engineering Student</p>
                    <Link to="/about">
                    <Button baStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/Profile-pic.jpg" roundedCircle className="profile-pic" />
                    </Col>
                </Row>
            </Container>
        )
    }
}
