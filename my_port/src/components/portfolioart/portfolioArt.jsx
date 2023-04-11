import React from 'react'
import './portfolioArt.css'
import IMG1 from '../../assets/foodie.png'
import IMG2 from '../../assets/alpha.png'
import IMG3 from '../../assets/Run.png'
import IMG4 from '../../assets/photography.png'


const data=[
  {
    id: 1,
    image: IMG1,
    title: 'A full user research and design for  FOODIE application',
    demo: 'https://www.behance.net/gallery/158398391/My-foodie-app',
    figma: 'https://www.behance.net/gallery/158398391/My-foodie-app'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Full user resarch and designs for multibanking app - ALPHA',
    github: 'https://github.com/shayomi',
    demo: 'https://dribbble.com/shots/19685625-Restaurant-webpage',
    figma: 'https://www.behance.net/gallery/158398391/My-foodie-app'
  },
  {
    id: 1,
    image: IMG3,
    title: 'High Fidelity designs for RUN Technologies delivery app',
    github: 'https://github.com/shayomi',
    demo: 'https://dribbble.com/shots/19685769-Hotel-landing-page-using-react-js',
    figma: 'https://www.behance.net/gallery/158398391/My-foodie-app'
  },
  {
    id: 1,
    image: IMG4,
    title: 'User Interface and wireframe design for a photography app; Photolife',
    github: 'https://github.com/shayomi',
    demo: 'https://dribbble.com/shots/19685769-Hotel-landing-page-using-react-js',
    figma: 'https://www.behance.net/gallery/158398391/My-foodie-app'
  },
]

const Portfolioart = () => {
  return (
    <section id="portfolio">

      <h2> Art & Illustration </h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, figma})=> {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  <a href={figma} className='btn' target='_blank'>Figma</a>
                </div>
              </article>
            )
          })
        }



      </div>
    </section>
  )
}

export default Portfolioart
