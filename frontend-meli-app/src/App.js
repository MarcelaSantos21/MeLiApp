import './App.scss'
import { Outlet } from 'react-router-dom'
import Search from './pages/Search/Search'

function App () {
  return (
    <div className="App">
      <header>
        <Search/>
      </header>
      <Outlet />
    </div>
  )
}

export default App
