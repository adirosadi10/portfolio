import React from 'react'
import "./Topbar.scss"
import { Call, Email } from '@material-ui/icons';
export default function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">rosadi.</a>
          <div className="itemContainer">
            <Call />
            <span>+62 896 3630 8432</span>
          </div>
          <div className="itemContainer">
            <Email />
            <span>adirosadi49@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

    </div>
  )
}

