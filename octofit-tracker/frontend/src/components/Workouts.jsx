import CollectionState from './CollectionState'
import { useCollection } from './useCollection'

export default function Workouts() {
  const { items, loading, error } = useCollection('/api/workouts/')

  return (
    <section>
      <div className="section-heading"><div><p className="eyebrow">Build your rhythm</p><h2>Workouts</h2></div><span className="badge text-bg-success">Fresh ideas</span></div>
      <CollectionState loading={loading} error={error} emptyMessage="No workouts are available yet.">
        <div className="row g-3">
          {items.map((workout) => (
            <article className="col-md-6" key={workout._id || workout.id}>
              <div className="workout-card"><div className="workout-icon">✦</div><div><h3>{workout.name || workout.title || 'Untitled workout'}</h3><p>{workout.description || `${workout.duration || 30} minute session`}</p></div><span className="small text-secondary">{workout.level || workout.difficulty || 'All levels'}</span></div>
            </article>
          ))}
        </div>
      </CollectionState>
    </section>
  )
}
