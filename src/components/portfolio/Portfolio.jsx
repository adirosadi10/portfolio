import React, { useState, useEffect } from 'react'
import "./Portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { featPort, webAppPort, webDesPort, deskAppPort } from "../../data"


export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "webApp",
      title: "Web App",
    },
    {
      id: "deskApp",
      title: "Desktop App",
    },
    {
      id: "other",
      title: "Other",

    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featPort);
        break;
      case "webApp":
        setData(webAppPort);
        break;
      case "deskApp":
        setData(deskAppPort);
        break;
      case "other":
        setData(webDesPort);
        break;
      default:
        setData(featPort);
    }
  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}> <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
          </li>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="item">
            <img src={d.img} alt="" />
            <p>{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
