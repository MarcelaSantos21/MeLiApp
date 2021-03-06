import NumberFormat from 'react-number-format'
import './ItemDetail.scss'

function ItemDetail ({ data }) {
  let condition = ''

  switch (data.condition) {
    case 'new':
      condition = 'Nuevo'
      break
    case 'not_specified':
      condition = 'No especificado'
      break
    case 'used':
      condition = 'Usado'
      break

    default:
      condition = ''
      break
  }
  return (
    <div className="Item-detail">
        <section className='Details-sup'>
            <img className='Product-img' src={data.picture} alt="product-img" />
            <div>
                <p className='Product-condition'>{condition} - {data.sold_quantity} vendidos</p>
                <h1 className='Product-name'>{data.title}</h1>
                <span className='Product-price'>
                 <NumberFormat value={data.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </span>
                <button className='btn-buy'>Comprar</button>
            </div>
        </section>
        <section>
            <h2 className='title-description'>Descripcion</h2>
            <p className='Product-description'>{data.description}</p>
        </section>
    </div>
  )
}

export default ItemDetail
