import './ItemNotFound.scss'
import lupa from '../../assets/ic_Search@2x.png'

function ItemNotFound () {
  return (
      <div className='item-not-found'>
        <h1 className='title'>
          No hay items que coincidan con tu búsqueda
        </h1>
        <div className="App-wrapper">
              <img className='gifError'src={lupa} alt="alt-page-not-found"/>
              {/* <span className='msgError'>Pagina no encontrada</span> */}
        </div>
      </div>
  )
}
export default ItemNotFound
