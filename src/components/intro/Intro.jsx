import React, { useEffect, useRef } from 'react'
import "./Intro.scss"
import { init } from "ityped"
import { Email, Call } from '@material-ui/icons';

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { showCursor: true, backDelay: 1500, backSpeed: 60, strings: ['Developer.', 'Programmer.'] })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">


          <h2>Hi There, I'm</h2>
          <h1>Adi Rosadi</h1>
          <h3>I'm a <span ref={textRef}></span></h3>

          <ul className="sosmed">
            <li className="email">
              < Email />
              <p>adirosadi49@gmail.com</p></li>
            <li className="email">
              < Call />
              <p>+6289636308432</p></li>
          </ul>
        </div>
        <a href="#portfolio">
          <img src="assets/icons/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
