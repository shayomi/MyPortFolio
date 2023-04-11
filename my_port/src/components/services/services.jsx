import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='service'>
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Design a great experience for your users on the web and mobile app platforms </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Design amazing and interactive user interface for users to enjoy </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Information Architecture </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Wireframing </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Prototyping and high-fidelity designs </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> User Testing </p>
            </li>
          </ul>
        </article>
        {/* END OF UIUX */}

        <article className="service">
          <div className="service__head">
            <h3> WEB DEVELOPMENT </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Developing interactive websites using programming languages </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Testing applications and interfaces </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Day to day management of websites </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Web design structuring for search engine optimization </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Translate wireframe deisgns into working codes </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Troubleshooting, fixing blogs and glitches </p>
            </li>
          </ul>
        </article>
          {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3> ARTS & DESIGNS </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Creating comic characters </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Developing game characters </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Creating serene and fantasy environments/ backgrounds/gardens </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Drawing illustrations and cartoon art </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Portrait drawings using pencils </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Abstract and landscape paintings </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
