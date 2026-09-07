import CollectionState from './CollectionState'
import { useCollection } from './useCollection'

export default function Leaderboard() {
  const { items, loading, error } = useCollection('api/leaderboard')

  return (
    <section>
      <div className="section-heading"><div><p className="eyebrow">Team pulse</p><h2>Leaderboard</h2></div><span className="badge text-bg-warning">This week</span></div>
      <CollectionState loading={loading} error={error} emptyMessage="The leaderboard is waiting for its first score.">
        <div className="leaderboard-list">
          {items.map((entry, index) => (
            <div className="leaderboard-row" key={entry._id || entry.id || index}>
              <span className="rank">{String(index + 1).padStart(2, '0')}</span>
              <span className="avatar">{(entry.userId?.username || entry.username || '?').slice(0, 1).toUpperCase()}</span>
              <span className="flex-grow-1 fw-semibold">{entry.userId?.username || entry.username || 'Athlete'}</span>
              <strong>{entry.points ?? entry.score ?? 0}<small> pts</small></strong>
            </div>
          ))}
        </div>
      </CollectionState>
    </section>
  )
}
