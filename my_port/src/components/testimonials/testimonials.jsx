import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination,Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data=[
  {
    avatar: AVT1,
    name: 'Seun Olabiyi',
    review: 'Sayomi is an amazing developer who is very diligent and keep to time. His web designs are topnotch, easy to navigate and interactive'
  },
  {
    avatar: AVT2,
    name: 'Wale Stark',
    review: 'Sayomi is a former employee of mine. He worked with us a UI/UX developer and did his jobs well. He is dilligent and hardwork and innovative '
  },
  {
    avatar: AVT3,
    name: 'Leke Victor',
    review: 'Sayo is my go to guy when it comes to artworks. He draws well and also installs artworks neatly. He is a great guy'
  },
  {
    avatar: AVT4,
    name: 'Babasegun Thomas',
    review: 'Sayo Adegoroye is a good person to work with, He always delivers his jobs to the best of his ability '
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Review from Clients</h5>
      <h2> Testimonials </h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {
        data.map(({avatar, name, review}, index)=>{
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
