import { Route, Routes } from 'react-router-dom'
import App from './../App'
import ProductList from './../pages/ProductsList/ProductList'
import ProductDetails from './../pages/ProductDetails/ProductDetails'
import NotFound from './../pages/NotFound/NotFound'

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} >
          {/* <Route index element={<Search/>} /> */}
          <Route path="items" element={<ProductList />} />
          <Route path="items/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
  )
}
export default Router
