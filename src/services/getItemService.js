import { API_URL } from './settings'

export default function getItem (id) {
  const apiURL = `${API_URL}/items/${id}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(data => data)
}
