import React, { useState } from 'react'
import "./Works.scss"
import { DesktopWindows, Language, Devices } from '@material-ui/icons'
// import DevicesIcon from '@material-ui/icons/Devices';
// import LanguageIcon from '@material-ui/icons/Language';

export default function Works() {
  const [curSlide, setCurSlide] = useState(0)
  const data = [
    {
      id: 1,
      icon: <DesktopWindows />,
      title: "Desktop App",
      desc: "Merancang dan membangun program aplikasi desktop menggunakan VB.NET dengan mempertimbangkan kebutuhan pengguna.",
      img: "assets/portfolio/portfolio1.png",
      link: "",
    },
    {
      id: 2,
      icon: <Language />,
      title: "Web App",
      desc: "Merancang dan membangun aplikasi web menggunakan PHP, Javascript, API dengan mempertimbangkan kebutuhan pengguna.",
      img: "assets/portfolio/portfolio10.jpeg",
      link: "https://olshop-codeigniter.000webhostapp.com/"
    },
    {
      id: 3,
      icon: <Devices />,
      title: "Responsive Web",
      desc: "Merancang aplikasi yang bersifat userfriendly.",
      img: "assets/portfolio/portfolio4.png",
      link: "https://adirosadi10.github.io/covid-tracker/"
    },
  ]
  const handleClick = (way) => {
    way === "left"
      ? setCurSlide(curSlide > 0
        ? curSlide - 1 : 1)
      : setCurSlide(curSlide < data.length - 1 ? curSlide + 1
        : 0)
  }
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${curSlide * 100}vw)` }}
      >
        {data.map(d => (

          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <div className="img">{d.icon}</div>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>
                    <span>Project</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))
        }</div>
      <img src="assets/icons/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/icons/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />

    </div>
  )
}
