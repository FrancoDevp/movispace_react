import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from './CartContext'

const Carrito = () => {

  const {carrito, cantidad, total} = useContext(context)


  return (
    <div>Carrito</div>
  )
}

export default Carrito