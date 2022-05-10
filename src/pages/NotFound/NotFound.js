import './NotFound.scss'

function NotFound () {
  const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }

  return (
      <>
        <h1>
          <title>Error 404 | Giffy</title>
        </h1>
        <div className="App-wrapper">
          <div className='pageError'>
              <span className='codeError'>404</span>
              <span className='msgError'>Pagina no encontrada</span>
              <img className='gifError'src={randomImage()} alt="alt-page-404"/>
              {/* <Button href='/'>Go back home</Button> */}
          </div>
        </div>
      </>
  )
}
export default NotFound
