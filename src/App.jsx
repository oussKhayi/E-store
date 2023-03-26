import React from 'react'
import Footer from './views/snippets/Footer'
import Nav from './views/snippets/Nav'
import { Cart } from './views/Cart'
import ProductCarousel from './views/Carousel'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Error } from './views/Error'
import Pagination from './views/Pagination'
import Category from './views/Category'
import Phones from './views/categories/phones'
import Laptops from './views/categories/Laptops'
import Tv from './views/categories/tv'
import Accessoires from './views/categories/Accessoires'



const App = () => {

  return (
    <div className='container shadow p-0'>
<Nav/>

<BrowserRouter>
  <Routes>
        <Route index path='/' />
        <Route path='/carousel' element={<Category/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/phones' element={<Phones/> }/>
        <Route path='/laptops' element={<Laptops/> }/>
        <Route path='/tv' element={<Tv />}/>
        <Route path='/accessoires' element={<Accessoires/>}/>
        <Route path="*" element={<Error />} />
  </Routes>
  {/* <Cart/> */}
</BrowserRouter>
<Pagination/>
<Footer/>
    </div>
  )
}

export default App
