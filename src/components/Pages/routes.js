import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './products'

export const AppRoutes = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Products />}/>
          </Routes>
        </BrowserRouter>
    )
}