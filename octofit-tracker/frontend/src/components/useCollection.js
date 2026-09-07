import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

export function useCollection(component) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(component)
      .then((nextItems) => {
        if (active) setItems(nextItems)
      })
      .catch((requestError) => {
        if (active) setError(requestError.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [component])

  return { items, loading, error }
}
