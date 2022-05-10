import { useState, useEffect } from 'react'
import searchItems from './../services/searchItemService'

export const useItems = (query) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    searchItems(query)
      .then(data => {
        setData(data)
        setLoading(false)
      }).catch(e => setError('Ocurrió un error'))
      .finally(() => setLoading(false))
  }, [query])

  return { data, error, loading }
}
