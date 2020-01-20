import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar className="navbar" collapseOnSelect>
                <Nav.Item>
                    <Nav.Link className="ken-johnson" href="/" eventKey="1">Ken Johnson</Nav.Link>
                </Nav.Item>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Nav.Item>
                            <Nav.Link href="/" eventKey="1">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about" eventKey="2">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/projects" eventKey="3">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/timeline" eventKey="4">Timeline</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}




