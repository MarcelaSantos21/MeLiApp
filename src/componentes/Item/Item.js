import './Item.scss'
import { Link } from 'react-router-dom'
import icShipping from '../../assets/ic_shipping.png'

function Item (props) {
  console.log(props.data)

  return (
        <div className='Item'>
            {props.data.map((item) => (
                <div key={item.id}>
                    <Link to={`/items/${item.id}`}>
                        <div className='Item-container'>
                        <span className='Item-picture'><img src={item.picture} alt="logo" /></span>
                        <div className='Item-details'>
                            <span className='Item-details-price'>{item.price.amount}
                                <img src={icShipping} alt="icon-shipping" />
                            </span>
                            <p className='Item-details-description'>{item.title}</p>
                        </div>
                        <p className='Item-seller'>{item.seller.name}</p>
                    </div>
                    </Link>
                </div>
            ))}

        </div>
  )
}

export default Item
