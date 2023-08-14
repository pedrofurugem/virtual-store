import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './products'
import { Product } from './product'

export const AppRoutes = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Products />}/>
            <Route exact path="/products/:id" element={ <Product /> }/>
          </Routes>
        </BrowserRouter>
    )
}