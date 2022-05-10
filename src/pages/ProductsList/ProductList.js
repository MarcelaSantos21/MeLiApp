import { useSearchParams } from 'react-router-dom'
import './ProductList.scss'
import Item from './../../componentes/Item/Item'
import Spinner from './../../componentes/Spinner/Spinner'
import { useItems } from './../../hooks/useItems'
import ItemNotFound from '../../componentes/ItemNotFound/ItemNotFound'
import Categories from '../../componentes/Categories/Categories'
import { useEffect } from 'react'

function ProductList (props) {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('search')
  const { data, error, loading, getData } = useItems()

  useEffect(() => {
    getData(query)
  }, [getData, query])

  if (loading) {
    return <Spinner/>
  }

  if (error !== '') {
    return <h1>{error}</h1>
  }

  return (
    <div className='ProductList'>
      {data && data.items.length > 0
        ? <div>
            <div className='ProductList-categories'>
              <Categories categories = {data.categories} />
            </div>
            <Item data={data.items} />
          </div>
        : <ItemNotFound/>
      }
    </div>
  )
}

export default ProductList
