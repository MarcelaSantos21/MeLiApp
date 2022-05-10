import { useState, useCallback } from 'react'
import searchItems from './../services/searchItemService'

export const useItems = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getData = useCallback((query) => {
    setLoading(true)
    searchItems(query)
      .then(setData)
      .catch(() => setError('Ocurrió un error'))
      .finally(() => setLoading(false))
  }, [])
  return { data, error, loading, getData }
}
