import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5> Get to know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="container about__container">
            <img src="" alt="" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 2+ Years Working </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 8+ Worldwide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 20+ Completed Projects </small>
            </article>
          </div>

          <p>
            I am an enthusiastic, self motivated, reliable, responsible and hard
            working person. I started my journey as a web developer, UI/UX Designer 2 years ago and
            visual artist career 5 years ago. I have gained quite a lot of Experience
            over those years and i have completed numerous projects both in the
            tech industry and art/design industry. I am a major team worker and
            adaptable to all challenging situations.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About
