import React from 'react'
import { Link } from "react-router-dom"
import { Route, Routes } from 'react-router-dom';

const Header = () => {
  return (<>
    <header className='title_header'>
      <Link to="movispace" >Clothes Club</Link>
      <Link to="carrito"><span className="material-icons h1">shopping_cart</span></Link>
    </header>
  </>
  )
}

export default Header