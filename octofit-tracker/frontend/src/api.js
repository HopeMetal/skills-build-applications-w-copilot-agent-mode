const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}`
  : 'http://localhost:8000'

export function getItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.items)) return payload.items
  return []
}

export async function fetchCollection(component) {
  const response = await fetch(`${API_BASE_URL}${component}`)
  if (!response.ok) {
    throw new Error(`Unable to load ${component}: ${response.status}`)
  }
  return getItems(await response.json())
}
