import React, { useState } from 'react'
import "./Contact.scss"
import { GitHub, LinkedIn, Email, Call } from '@material-ui/icons';

export default function Contact() {
  const [message, setMassage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setMassage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="wrapper">

        <div className="left">
          {/* <div id="mapid" ></div> */}
          <img src="assets/icons/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thank, I'll reply ASAP :) </span>}
          </form>
        </div>
      </div>
      <div className="footer">
        <ul>
          <li><a href="https://github.com/adirosadi10"><GitHub /></a></li>
          <li><a href="https://www.linkedin.com/in/adi-rosadi/"><LinkedIn /></a></li>
        </ul>
      </div>
    </div>
  )
}
