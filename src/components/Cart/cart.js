//import { useState } from 'react'
//import { styled } from 'styled-components'

export const Cart = ( { cartItems } )=> {
  return(
    <div>
      <h2>Sacola</h2>
      {cartItems.map((item, index)=> (
          <div key={index}>
          <p>{item.name}</p>
          <p>R$ {item.price.toFixed(2)}</p>
          </div> 
      ))}
    </div>
  )
}

