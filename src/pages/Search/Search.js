import './Search.scss'
import logo from '../../assets/logo.png'
import icsearch from '../../assets/ic_Search.png'
import { useNavigate, createSearchParams, Link } from 'react-router-dom'
import { useState } from 'react'

function Search (props) {
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const searchItem = () => {
    if (input) {
      const params = { search: input }
      navigate({
        pathname: '/items',
        search: `?${createSearchParams(params)}`
      })
    }
  }

  return (
        <div className='Search'>
        <Link to={'/'}>
            <img className='App-logo' src={logo} alt="logo" onClick={() => { setInput('') }} />
        </Link>
            <div className='input-container'>
                <input className='Search-input' type="text" placeholder='Nunca dejes de buscar'
                    value={input} onInput={e => setInput(e.target.value)}
                />
                <span className='Search-icon' onClick={searchItem}>
                    <img src={icsearch} alt="icon-search" />
                </span>
            </div>
        </div>
  )
}
export default Search
