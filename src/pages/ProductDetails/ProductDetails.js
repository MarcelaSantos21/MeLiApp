import { useParams } from 'react-router-dom'
import './ProductDetails.scss'
// import { useFetch } from './../../hooks/useFetch'
import { useItem } from '../../hooks/useItem'
import { useEffect } from 'react'
import ItemNotFound from './../../componentes/ItemNotFound/ItemNotFound'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail'
import Categories from '../../componentes/Categories/Categories'
import Spinner from '../../componentes/Spinner/Spinner'

function ProductDetails () {
  const { id } = useParams()
  const { data, error, loading, getData } = useItem()

  useEffect(() => {
    getData(id)
  }, [id])

  if (loading) {
    return <h1><Spinner/></h1>
  }

  if (error !== '') {
    return <h1>{error}</h1>
  }
  return (
    <div className='Details'>
     {data
       ? <div>
          <Categories categories = {data.categories}/>
          <ItemDetail data = {data}/>
        </div>
       : <ItemNotFound/>
     }
    </div>
  )
}

export default ProductDetails
