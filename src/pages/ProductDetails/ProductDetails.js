import { useParams } from 'react-router-dom'
import './ProductDetails.scss'
// import { useFetch } from './../../hooks/useFetch'
import { useFetch } from '../../hooks/useItem'

function ProductDetails () {
  const { id } = useParams()

  const { item, error, loading } = useFetch(
    `http://localhost:9010/api/items/${id}`
  )
  console.log(id, item)
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error !== '') {
    return <h1>{error}</h1>
  }
  return (
    <div className='Details'>
      <section className='Details-sup'>
        <img className='Product-img' src={item.picture} alt="product-img" />
        <div>
          <p className='Product-condition'>{item.new} - {item.sold} vendidos</p>
          <h1 className='Product-name'>{item.title}</h1>
          <span className='Product-price'>${item.price.amount}</span>
          <button className='btn-buy'>Comprar</button>
        </div>
      </section>
      <section>
        <h2 className='title-description'>Descripcion</h2>
        <p className='Product-description'>{item.description}</p>
      </section>
    </div>
  )
}

export default ProductDetails
