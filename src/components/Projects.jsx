import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './Projects.css'

export default class Projects extends Component {
  render() {
    return (
      <div class="projects-section" id="projects">
        <h1 class="page-title">Technical Experience</h1>
        <ul>
          <li>
            <span></span>
            <div class="title">Personal Portfolio</div>
            <div class="location">Personal Project</div>
            <div class="info">Created a personal portfolio website where I go over what kind of person I am, 
              and the projects I have worked on which has given me technical experience. Developed the 
              website from scratch using ReactJS, HTML and CSS, learning a lot about these languages along 
              the way.</div>
            <div class="website"></div>
            <div class="date">
              <span>January 2020<br />- Present</span>
            </div>
          </li>
          <li>
            <span></span>
            <div class="title">"Mood" Web Application</div>
            <div class="location">NWHacks</div>
            <div class="info">Developed the front end of a web application called ‘Mood’ within 24 hours at 
              the NW Hacks hackathon event. The goal of this project was to develop an application that 
              helps users relax and de-stress. We approached this by asking users to input their mood then 
              playing relevant music, and assigning tasks that would help ease their minds based on their 
              input. We distributed the work between the four group members to work efficiently and so that 
              we could have a complete website with a front end as well as a backend. I developed the front 
              end using JavaScript, HTML, CSS and React Bootstrap. Each one of us significantly improved our 
              web development skills within these 24 hours, learning from each other as well as experienced 
              mentors who were at the event.</div>
            <div class="website"></div>
            <div class="date">
              <span>January 2020</span>
            </div>
            
          </li>
          <li>
            <span></span>
            <div class="title">Front End Development</div>
            <div class="location">UBC Unmanned Aitcraft Systems</div>
            <div class="info">To be able to use and interact with the survey optimization algorithm I designed 
              I need to integrate the program with UBC UAS's front end web server. I used JavaScript, HTML, 
              and React.js to work on this project learning new skills quickly from my teammates. I designed 
              an interface which allows users to call the survey optimization method which then displays the 
              route the drone will take on a map. The user can then either send the drone off to start or it 
              can re-calculate a new path.</div>
            <div class="website"></div>
            <div class="date">
              <span>November 2019<br /> - Present</span>
            </div>
          </li>
          <li>
            <span></span>
            <div class="title">Survey Optimization Algorithm</div>
            <div class="location">UBC Unmanned Aitcraft Systems</div>
            <div class="info">As one of the projects for UBC UAS, I developed an algorithm in 
              Python which takes a number of waypoints that the drone must fly through, and finds the shortest 
              route through every point which covers the least amount of distance. I used a simulated 
              annealing approach to solve this problem because we had a decent number of points of interest 
              (over 15) and had a limited amount of time to calculate this shortest path. The implemented 
              method gave us a great compromise between efficiency as well as functionality, giving us a path 
              that is very close to, if not the shortest path between the points in a matter of seconds.</div>
            <div class="website"></div>
            <div class="date">
              <span>September 2019<br /> - November 2019</span>
            </div>
          </li>
          <li>
            <span></span>
            <div class="title">Raspberry Pi Smart Mirror</div>
            <div class="location">Personal Project</div>
            <div class="info">Motivated by some videos on YouTube, I decided to make a ‘Smart Mirror’, an 
              interactive mirror, over my two week winter break. Because I was very limited in terms of time, I 
              planned everything out a week in advance, making a list of all the equipment I will need for this 
              project, and drawing a rough outline of what I thought the final product should look like. I 
              worked on both the hardware and software of the project throughout the break, building the wooden 
              frame using a circular saw and modifying the "Magic Mirror" software from a GitHub repository to 
              match my needs. Although the final product wasn't perfect, it was an amazing experience and I 
              learned a lot along this journey.</div>
            <div class="website"></div>
            <div class="date">
              <span>December 2019<br /> - January 2020</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
