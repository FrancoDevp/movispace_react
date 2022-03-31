import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from './CartContext'

const Carrito = () => {

  const {carrito, cantidad, total} = useContext(context)


  return (
    <div></div>
  )
}

export default Carrito