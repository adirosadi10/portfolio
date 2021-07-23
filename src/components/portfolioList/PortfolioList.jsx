import './PortfolioList.scss'

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <ul>
      <li key={(id)} className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)
      }>
        {title}
      </li >
    </ul>
  )
}
