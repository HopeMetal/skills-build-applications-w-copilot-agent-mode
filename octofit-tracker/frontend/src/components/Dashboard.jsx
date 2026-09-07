import { Link } from 'react-router-dom'

const links = [
  ['activities', 'Log movement', 'See the latest activity across your crew.'],
  ['workouts', 'Choose a workout', 'Find a session that fits your energy today.'],
  ['leaderboard', 'Check the leaderboard', 'A little friendly competition goes a long way.'],
]

export default function Dashboard() {
  return (
    <section className="dashboard-intro">
      <p className="eyebrow">The daily starting line</p>
      <h1>Make your next move count.</h1>
      <p className="lead">OctoFit keeps your people moving together, one good decision at a time.</p>
      <div className="row g-3 mt-4">
        {links.map(([to, title, text]) => <div className="col-lg-4" key={to}><Link className="action-card" to={`/${to}`}><span>{title}</span><small>{text}</small><b aria-hidden="true">↗</b></Link></div>)}
      </div>
    </section>
  )
}
