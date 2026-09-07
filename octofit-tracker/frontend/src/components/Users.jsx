import CollectionState from './CollectionState'
import { useCollection } from './useCollection'

export default function Users() {
  const { items, loading, error } = useCollection('users')

  return (
    <section>
      <div className="section-heading"><div><p className="eyebrow">Your community</p><h2>Members</h2></div><span className="badge text-bg-light">{items.length} members</span></div>
      <CollectionState loading={loading} error={error} emptyMessage="No members found.">
        <div className="row g-3">
          {items.map((user) => (
            <article className="col-md-6" key={user._id || user.id}>
              <div className="member-card"><span className="avatar">{(user.username || user.name || '?').slice(0, 1).toUpperCase()}</span><div><h3>{user.username || user.name || 'Unnamed member'}</h3><p>{user.email || 'OctoFit member'}</p></div></div>
            </article>
          ))}
        </div>
      </CollectionState>
    </section>
  )
}
