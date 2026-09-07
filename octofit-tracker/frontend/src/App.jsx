import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Dashboard from './components/Dashboard'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import { API_BASE_URL } from './api'
import './App.css'

const navigation = [
  ['/', 'Overview', true],
  ['/activities', 'Activities'],
  ['/workouts', 'Workouts'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Members'],
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/"><img src="/octofitapp-small.png" alt="" /> <span>octofit<span>.</span></span></NavLink>
        <nav aria-label="Primary navigation">
          {navigation.map(([to, label, end]) => <NavLink key={to} to={to} end={end}>{label}</NavLink>)}
        </nav>
        <div className="status-dot" title={`API: ${API_BASE_URL}`}><i /> Live</div>
      </header>
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
      <footer className="container pb-4"><span>OCTOFIT TRACKER</span><span>Keep showing up.</span></footer>
    </div>
  )
}

export default App
