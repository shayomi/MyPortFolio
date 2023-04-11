import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have</h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3> Website Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> HTML / CSS </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> PHP </h4>
                <small className="text-light">Beginner </small>
              </div>
            </
            article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> JavaScript </h4>
              < small className="text-light">Intermediate</small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> React JS </h4>
              < small className="text-light">Intermediate</small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> BootStrap </h4>
              < small className="text-light">Intermediate</small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> Python </h4>
              < small className="text-light">Beginner</small>
            </div>  <
            /article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__uiux">
          <h3> UI / UX Designs</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
               <h4> Figma </h4>
               <small className="text-light">Advanced</small>
             </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
               <h4> Adobe Illustrator </h4>
               <small className="text-light">Intermediate </small>
             </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
               <h4> Photoshop </h4>
               <small className="text-light">Experienced</small>
             </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
               <h4> Adobe XD </h4>
               <small className="text-light">Beginner</small>
             </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
               <h4> Video Premier </h4>
               <small className="text-light">Intermediate</small>
             </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
               <h4> Procreate </h4>
               <small className="text-light">Experienced</small>
             </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
          <h3> Visual Art and Designs</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> Pencil Art </h4>
              < small className="text-light">Advanced</small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> Digital Art </h4>
              < small className="text-light">Intermediate </small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> Comics </h4>
              < small className="text-light">Intermediate</small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> Illustration </h4>
              < small className="text-light">Intermediate</small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> Cartoons </h4>
              < small className="text-light">Intermediate</small>
            </div>  <
            /article>

            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
                <h4> Fantasy Art </h4>
              < small className="text-light">Beginner</small>
            </div>  <
            /article>
          </div>
        </div>
 {/* END OF BACKEND */}



      </div>

    </section>
  )
}

export default Experience
