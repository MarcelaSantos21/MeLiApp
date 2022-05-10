import { API_URL } from './settings'

export default function searchItems (query) {
  const apiURL = `${API_URL}/items/?q=${query}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(data => data)
}
