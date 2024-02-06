import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes