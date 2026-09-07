import CollectionState from './CollectionState'
import { useCollection } from './useCollection'

export default function Activities() {
  const { items, loading, error } = useCollection('-8000.app.github.dev/api/activities/')

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Movement log</p>
          <h2>Activities</h2>
        </div>
        <span className="badge text-bg-light">{items.length} recorded</span>
      </div>
      <CollectionState loading={loading} error={error} emptyMessage="No activities recorded yet.">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead><tr><th>Activity</th><th>Member</th><th>Value</th><th>Date</th></tr></thead>
            <tbody>
              {items.map((activity) => (
                <tr key={activity._id || activity.id}>
                  <td className="fw-semibold">{activity.type || activity.name || 'Workout'}</td>
                  <td>{activity.userId?.username || activity.username || 'Unassigned'}</td>
                  <td>{activity.duration ? `${activity.duration} min` : activity.distance ? `${activity.distance} km` : activity.calories ? `${activity.calories} kcal` : 'Logged'}</td>
                  <td>{activity.recordedAt ? new Date(activity.recordedAt).toLocaleDateString() : 'Today'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CollectionState>
    </section>
  )
}
