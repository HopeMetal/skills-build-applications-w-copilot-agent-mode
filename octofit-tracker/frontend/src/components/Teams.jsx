import CollectionState from './CollectionState'
import { useCollection } from './useCollection'

export default function Teams() {
  const { items, loading, error } = useCollection('-8000.app.github.dev/api/teams/')

  return (
    <section>
      <div className="section-heading"><div><p className="eyebrow">Find your people</p><h2>Teams</h2></div><span className="badge text-bg-light">{items.length} teams</span></div>
      <CollectionState loading={loading} error={error} emptyMessage="No teams have been created yet.">
        <div className="row g-3">
          {items.map((team) => (
            <article className="col-md-6" key={team._id || team.id}>
              <div className="team-card"><div className="team-mark">{(team.name || 'T').slice(0, 1).toUpperCase()}</div><div><h3>{team.name || 'Unnamed team'}</h3><p>{team.members?.length || team.memberCount || 0} members</p></div></div>
            </article>
          ))}
        </div>
      </CollectionState>
    </section>
  )
}
