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
            <div class="info">Created this personal portfolio website for job application purposes, and to gain experience with front end web development. 
              Developed from scratch using ReactJS, HTML and CSS.</div>
            <div class="website"></div>
            <div class="date">
              <span>January 2020<br />- Present</span>
            </div>
          </li>
          <li>
            <span></span>
            <div class="title">"Mood" Web Application</div>
            <div class="location">Hackathon - NWHacks</div>
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
            <div class="location">Student Design Team - UBC Unmanned Aircraft Systems (UAS)</div>
            <div class="info">Integrated the survey optimization algorithm (referred to below) 
              with the UBC UAS front end web server using JavaScript, HTML, CSS, 
              and ReactJS. Designed 
              an interface allowing users to call the survey optimization method which then displays the 
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
            <div class="location">Student Design Team - UBC Unmanned Aircraft Systems (UAS)</div>
            <div class="info">Developed an algorithm in 
              Python which takes a number of waypoints that the drone must fly through, and finds the shortest 
              route through every point which covers the least distance. Applied a simulated 
              annealing approach to solve this problem as we had over 15 points of interest 
              and had a limited amount of time to calculate this shortest path. The implemented 
              method provided a great compromise between efficiency and functionality, yielding a path 
              that is very close to, if not the shortest path between the points in a matter of seconds.</div>
            <div class="website"></div>
            <div class="date">
              <span>September 2019<br /> - November 2019</span>
            </div>
          </li>
          <li>
            <span></span>
            <div class="title">Raspberry Pi Smart Mirror</div> {/*Utilized progect management app, proficient in the use of*/}
            <div class="location">Personal Project</div>
            <div class="info">Built interactive mirror during my two week winter break. Due to this time constraint, I
              planned everything out a week in advance, making a list of all the equipment I will need for this 
              project, and drawing a rough outline of what I thought the final product should look like. I 
              worked on both the hardware and software of the project throughout the break, building the wooden 
              frame using a circular saw and modifying the "Magic Mirror" software from a GitHub repository to 
              match my needs. Although the final product wasn't perfect, it was an amazing experience.</div>
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
