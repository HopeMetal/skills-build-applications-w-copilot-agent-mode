export default function CollectionState({ loading, error, children, emptyMessage }) {
  if (loading) return <p className="text-secondary">Loading...</p>
  if (error) return <p className="alert alert-danger mb-0">{error}</p>
  return children || <p className="text-secondary">{emptyMessage}</p>
}
