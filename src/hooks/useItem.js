import { useState, useCallback } from 'react'
import getItem from './../services/getItemService'

export const useItem = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getData = useCallback((id) => {
    setLoading(true)
    getItem(id)
      .then((data) => setData(data.item))
      .catch(() => setError('Ocurrió un error'))
      .finally(() => setLoading(false))
  }, [])
  return { data, error, loading, getData }
}
