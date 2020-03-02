/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import './Projects.css'

export default class Projects extends Component {
  state = {
    show: false,
    Java: false,
    Cpp: false,
    C: false,
    Python: false,
    JavaScript: false,
    ReactJS: false,
    Swift: false,
    iOSApp: false,
    WebApp: false,
    Git: false,
  }

  modalImage = "";
  modalText = "";

  handleFalse(item) {
    this.setState({ [item]:false })
  }

  handleTrue(item) {
    this.setState({ [item]:true })
  }

  handleSwitch(item) {
    var trueOrFalse = this.state[item];
    console.log(trueOrFalse);
    this.setState({ [item]:!trueOrFalse });
  }

  setModal(image, text) {
    this.modalImage = image;
    this.modalText = text;
  }
  
  render() {
    const urlearn = (this.state.Python || this.state.Git);
    const uasFrontEnd = (this.state.JavaScript || this.state.ReactJS ||this.state.WebApp || this.state.Git);
    const rPiController = (this.state.Python || this.state.Swift || this.state.iOSApp || this.state.Git);
    const personalPortfolio = (this.state.JavaScript || this.state.ReactJS || this.state.WebApp || this.state.Git);
    const imageFilter = (this.state.Cpp || this.state.Git);
    const dancingBiped = (this.state.Python || this.state.Git);
    const mood = (this.state.JavaScript || this.state.ReactJS || this.state.WebApp || this.state.Git);
    const smartMirror = false;
    const wikiMediator = (this.state.Java || this.state.Git);
    const kamino = (this.state.Java || this.state.Git);
    const riscMachine = (this.state.Git);
    const surveyOpti = (this.state.Python || this.state.Git);
    const calculator = (this.state.Swift || this.state.iOSApp || this.state.Git);
    return (
      <div class="projects-section" id="projects">
        <h1 class="page-title">Technical Experience</h1>
        <div className="project-organize">
          <h2 className="project-organize-title">Highlight skills:</h2>
          <div className={ this.state.Java ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("Java")}}><div>Java</div></div>
          <div className={ this.state.Cpp ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("Cpp")}}><div>C++</div></div>
          <div className={ this.state.C ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("C")}}><div>C</div></div>
          <div className={ this.state.Python ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("Python")}}><div>Python</div></div>
          <div className={ this.state.JavaScript ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("JavaScript")}}><div>JavaScript</div></div>
          <div className={ this.state.ReactJS ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("ReactJS")}}><div>ReactJS</div></div>
          <div className={ this.state.Swift ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("Swift")}}><div>Swift</div></div>
          <div className={ this.state.iOSApp ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("iOSApp")}}><div>iOS App</div></div>
          <div className={ this.state.WebApp ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("WebApp")}}><div>Web App</div></div>
          <div className={ this.state.Git ? "project-organize-skill highlight" : "project-organize-skill" } onClick={() => {this.handleSwitch("Git")}}><div>Git</div></div>
        </div>
        <ul>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ urlearn ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Personalized Language Learning</div>
            <div className="date-mobile">February 2020 - Present</div>
            <div class="location">Personal Project</div>
            <div className="project-skills"><strong>Skills:</strong> Python, Google Cloud API, GitHub</div>
            <div class="info">Created an application that takes a URL and a target language as input parameters and scans the url page for text. The program then identifies words of interest and translates this list of words to the target language specified using the Google Cloud Translation API. The goal is then to create a set of flashcards using this list of words so that users can tailor their studying of a new subject to a specific topic.</div>
            <div class="date">
              <span>Present -<br />February 2020</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ uasFrontEnd ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Front End Development</div>
            <div className="date-mobile">November 2019 - Present</div>
            <div class="location">Student Design Team - UBC Unmanned Aircraft Systems (UAS)</div>
            <div className="project-skills"><strong>Skills:</strong> JavaScript, CSS, HTML, ReactJS, Docker, CLI, GitLab</div>
            <div class="info">Integrated the survey optimization algorithm (referred to below) 
              with the UBC UAS front end web server using React. Designed 
              an interface allowing users to call the survey optimization method which then displays the 
              route the drone will take on a map. The user can then either send the drone off to start or it 
              can re-calculate a new path. Worked with Docker to run our server on as well as GitLab as our main means of source control.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/UAS-frontend.png" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/UAS-frontend.png", "Front end design - in progress");}}/>
            </div>
            <div class="date">
              <span>Present -<br />November 2019</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ rPiController ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Raspberry Pi Autonomous Robot & iOS Controller</div>
            <div className="date-mobile">February 2020 - March 2020</div>
            <div class="location">Class Project</div>
            <div className="project-skills"><strong>Skills:</strong> Swift, Python, iOS App Development, Firebase, Raspberry Pi, GitHub</div>
            <div class="info">Individually built an iOS application to control a Raspberry Pi powered robot as an additional feature for a class project. Used Firebase’s database to interface between the RPi and the iOS device. Developed the iOS application in Swift, using Xcode and the RPi code using Python. Other features of our car included driving autonomously by following a line through the use of reflective optical sensors.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/rpi-controller.jpeg" onClick={() => {this.handleTrue("show"); this.setModal("assets/rpi-controller.jpeg", "iOS Raspberry Pi Controller - In Progress");}}/>
            </div>
            <div class="date">
              <span>March 2020 -<br />February 2020</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ imageFilter ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Image Filter's and GIF's</div>
            <div className="date-mobile">January 2020 - March 2020</div>
            <div class="location">Class Project</div>
            <div className="project-skills"><strong>Skills:</strong> C++, CLI (SSH), GDB debugger, Linux server, GitHub</div>
            <div class="info">Developed multiple programs in C++, to do with image filtering, rendering and animating. Created programs that added filters such as black and white, watermark, and pencil sketch, programs that split the image apart into multiple small blocks and rearrangind them to create patterns, and designed flood fill programs that created an animated gif of the image changing. Applied these programs to input PNG images.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/black-white.png" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/black-white.png", "Black and white filter");}}/>
              <img className="project-image" src="assets/Projects/watermark.png" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/watermark.png", "Watermark filter");}}/>
            </div>
            <div class="date">
              <span>March 2020 -<br />January 2020</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ personalPortfolio ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Personal Portfolio</div>
            <div className="date-mobile">January 2020 - February 2020</div>
            <div class="location">Personal Project</div>
            <div className="project-skills"><strong>Skills:</strong> JavaScript, CSS, HTML, ReactJS, Website deployment, CLI, GitHub</div>
            <div class="info">Created this personal portfolio website for job application purposes, and to gain experience with 
              front end web development. Developed from scratch using ReactJS and deployed using Netflify.</div>
            <a className={ personalPortfolio ? "website-highlighted" : "website" } href="https://github.com/Kojon74/Personal-Profile" target="_blank">https://github.com/Kojon74/Personal-Profile</a>
            <div class="date">
              <span>February 2020 -<br /> January 2020</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ dancingBiped ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Dancing Biped</div>
            <div className="date-mobile">February 2020</div>
            <div class="location">Class Project</div>
            <div className="project-skills"><strong>Skills:</strong> Python, GitHub, Raspberry Pi, ItsyBitsy, Soldering, Circuits</div>
            <div class="info">Built a “Dancing Biped” powered by an ItsyBitsy board. Added an LCD screen to display images as well as information, a sonar sensor to detect proximity to object to detect when to stop, a buzzer to play songs such as the Start Wars theme, and four motors to make up its legs and create six unique dance moves. Programmed everything in CircuitPython with a group of seven people, using GitHub to keep track of all our files. Used Trello as our project management tool to split up the project and work more efficiently.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/Biped.png" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/Biped.png", "Dancing biped");}}/>
            </div>
            <div class="date">
              <span>February 2020</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ mood ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">"Mood" Web Application</div>
            <div className="date-mobile">January 2020</div>
            <div class="location">Hackathon - NWHacks</div>
            <div className="project-skills"><strong>Skills:</strong> JavaScript, CSS, HTML, ReactJS, GitHub</div>
            <div class="info">Developed the front end of a web application called ‘Mood’ within 24 hours at 
              the NW Hacks hackathon event. The goal of this project was to develop an application that 
              helps users relax and de-stress. We approached this by asking users to input their mood then 
              playing relevant music, and assigning tasks that would help ease their minds based on their 
              input. We distributed the work between the four group members to work efficiently and so that 
              we could have a complete website with a front end as well as a backend. I developed the front 
              end using JavaScript, HTML, CSS and React Bootstrap. Each one of us significantly improved our 
              web development skills within these 24 hours, learning from each other as well as experienced 
              mentors who were at the event.</div>
            <a className={ mood ? "website-highlighted" : "website" } href="https://github.com/shadeying/Mood" target="_blank">https://github.com/shadeying/Mood</a>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/mood-1.jpg" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/mood-1.jpg", "Login page");}}/>
              <img className="project-image" src="assets/Projects/mood-2.jpg" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/mood-2.jpg", "Home page");}}/>
            </div>
            <div class="date">
              <span>January 2020</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ smartMirror ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Raspberry Pi Smart Mirror</div> {/*Utilized progect management app, proficient in the use of*/}
            <div className="date-mobile">December 2019 - January 2020</div>
            <div class="location">Personal Project</div>
            <div className="project-skills"><strong>Skills:</strong> Python, HTML, CSS, Raspberry Pi, CLI (SSH)</div>
            <div class="info">Built interactive mirror during my two week winter break. Due to this time constraint, I
              planned everything out a week in advance, making a list of all the equipment I will need for this 
              project, and drawing a rough outline of what I thought the final product should look like. I 
              worked on both the hardware and software of the project throughout the break, building the wooden 
              frame using a circular saw and modifying the "Magic Mirror" software from a GitHub repository to 
              match my needs. Although the final product wasn't perfect, it was an amazing experience.</div>
            <div className="project-image-container">
            </div>
            <div class="date">
              <span>January 2020 -<br />December 2019</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ wikiMediator ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">WikiMediator</div>
            <div className="date-mobile">November 2019 - December 2019</div>
            <div class="location">Class Project</div>
            <div className="project-skills"><strong>Skills:</strong> Java, API, Threading, GitHub, IntelliJ IDEA</div>
            <div class="info">Used an application program interface (API) to interface with Wikipedia, to get pages and answer queries. Also implemented a client-server pattern for allowing users to interact with the service implementation. Through this project, gained experience with: using external libraries and API’s for data processing, implementing concurrent processing of related operations, implementing core computing abstractions such as caching, and parsing and executing structured queries. We used Unit to test our functions and to check our code coverage. We used the IntelliJ IDEA debugger to find errors in the program, and GitHub for version control between partner.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/WikiMedia-3.png" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/WikiMedia-3.png", "Print page content for 'Cathy'");}}/>
            </div>
            <div class="date">
              <span>December 2019 -<br />November 2019</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ kamino ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Kamino Game</div>
            <div className="date-mobile">October 2019 - November 2019</div>
            <div class="location">Class Project</div>
            <div className="project-skills"><strong>Skills:</strong> Java, Optimization, Game Development, GitHub, IntelliJ IDEA</div>
            <div class="info">Implemented a “Graph” abstract data type (ADT) by using “vertices” and “edges” and added several associated operations so that this ADT could be integrated in a “Kamino Game” which involves hunting for a missing spaceship by searching through all the planets in space. Through this project we learned about the concept of encapsulation, interfaces, Java Generics, graphs and their representation, and graph algorithms to optimize our program. We then used JUnit to test the correctness four code, checking accuracy as well as code coverage, used the IntelliJ IDEA debugger to pinpoint the source of our errors, and GitHub for version control between partner.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/Kamino-1.png" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/Kamino-1.png", "Kamino game user interface");}}/>
            </div>
            <div class="date">
              <span>November 2019 -<br />October 2019</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ riscMachine ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">DE1-SoC Simple Risc Machine</div>
            <div className="date-mobile">October 2019 - November 2019</div>
            <div class="location">Class Project</div>
            <div className="project-skills"><strong>Skills:</strong> Verilog, ModelSim, Quartus, GitHub</div>
            <div class="info">Built a Turing complete RISC machine programmed with Verilog using ModelSim and Quartus over the course of multiple weeks. This machine could compute any calculation given enough time and memory. To create this machine we used RAM modules, finite state machines and program counters.</div>
            <a className={ riscMachine ? "website-highlighted" : "website" } href="https://github.com/Kojon74/Simple-RISC-Machine" target="_blank">https://github.com/Kojon74/Simple-RISC-Machine</a>
            <div className="project-image-container">
            </div>
            <div class="date">
              <span>November 2019 -<br />October 2019</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ surveyOpti ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">Survey Optimization Algorithm</div>
            <div className="date-mobile">September 2019 - November 2019</div>
            <div class="location">Student Design Team - UBC Unmanned Aircraft Systems (UAS)</div>
            <div className="project-skills"><strong>Skills:</strong> Python, Optimization, GitHub</div>
            <div class="info">Developed an algorithm in 
              Python which takes a number of waypoints that the drone must fly through, and finds the shortest 
              route through every point which covers the least distance. Applied a simulated 
              annealing approach to solve this problem as we had over 15 points of interest 
              and had a limited amount of time to calculate this shortest path. The implemented 
              method provided a great compromise between efficiency and functionality, yielding a path 
              that is very close to, if not the shortest path between the points in a matter of seconds.</div>
            <a className={ surveyOpti ? "website-highlighted" : "website" } href="https://github.com/Kojon74/Survey" target="_blank">https://github.com/Kojon74/Survey</a>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/UAS-survey-1.JPG" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/UAS-survey-1.JPG", "UAS test flight");}}/>
              <img className="project-image" src="assets/Projects/UAS-survey-2.JPG" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/UAS-survey-2.JPG", "UAS test flight");}}/>
            </div>
            <div class="date">
              <span>November 2019 -<br />September 2019</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={ calculator ? "project-item highlight" : "project-item" }>
            <span></span>
            <div class="title">iOS Calculator Application</div>
            <div className="date-mobile">May 2019 - July 2019</div>
            <div class="location">Personal Project</div>
            <div className="project-skills"><strong>Skills:</strong> Swift, iOS App Development, GitHub</div>
            <div class="info">Developed an advanced calculator application for iOS which could compute complex equations. Inspired by the TI-nspire, functionality and usability were the top priorities. Gained experience working in Swift and with storyboards.</div>
            <a className={ calculator ? "website-highlighted" : "website" } href="https://github.com/Kojon74/Calculator" target="_blank">https://github.com/Kojon74/Calculator</a>
            <div className="project-image-container">
              <img className="project-image" src="assets/Projects/calculator.png" onClick={() => {this.handleTrue("show"); this.setModal("assets/Projects/calculator.png", "iOS Calculator Application");}}/>
            </div>
            <div class="date">
              <span>July 2019 -<br /> May 2019</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        </ul>
        <Modal dialogClassName="project-modal" show={this.state.show} onHide={() => this.handleFalse("show")}>
          <Modal.Header closeButton>
            <Modal.Title>{this.modalText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="project-modal-image" src={this.modalImage}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
