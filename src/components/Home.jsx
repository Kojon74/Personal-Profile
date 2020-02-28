import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef();
    this.typeWrite = this.typeWrite.bind(this);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  componentDidMount() {
    const text = ['software developer', 'innovator', 'problem solver', 'determined worker', 'technology enthusiast'];
    let letterIndex = 0;
    let wordIndex = 0;
    let currentText = '';
    let letter = '';
    setTimeout(this.typeWrite, 8000, text, letterIndex, wordIndex, currentText, letter);
  }

  async typeWrite(text, letterIndex, wordIndex, currentText, letter) {
    if (letterIndex === 0) {
      await this.sleep(1000);
    }
    if (wordIndex === text.length) {
      wordIndex = 0;
    }
    currentText = text[wordIndex];
    letter = currentText.slice(0, ++letterIndex);

    this.intro.current.textContent = letter;
    if (letter.length === currentText.length) {
      await this.sleep(4000);
      wordIndex++;
      letterIndex = 0;
    }
    
    setTimeout(this.typeWrite, 300, text, letterIndex, wordIndex, currentText, letter);
  }

  
  render() {
    return (
      <div className="home-section" id="home">
        <Image src="assets/desk-pic.jpg" className="desk-pic" />
        <h2 className="name">Ken Johnson</h2>
        <div className="intro-container">
          <div className="intro-1">I am a </div>
          <div className="intro" ref={this.intro}></div>
        </div>
      </div>   
    )
  }
}
