import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {ImLinkedin} from 'react-icons/im'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get in Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4> Email </h4>
            <h5> tosinstephen94@gmail.com</h5>
            <a href="mailto:portfolioemail@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <ImLinkedin className="contact__option-icon"/>
            <h4> LinkedIn </h4>
            <h5>Adegoroye Sayo</h5>
            <a href="https://www.linkedin.com/in/sayo-adegoroye-41b28064" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon"/>
            <h4> Whatsapp </h4>
            <h5>2349034970469</h5>
            <a href="https://wa.me/message/3HUKQLVLEVLQG1" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of Contact Form */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" row="7" placeholder="Your Message" required> </textarea>
          <button type="submit" className="btn btn-primary">Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
