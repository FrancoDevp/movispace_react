import React from 'react'
import { Route, Routes, Router } from 'react-router-dom';
import Carrito from './Carrito';
import Contacto from './Contacto';
import Home from './Home';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import ItemDetail from './ItemDetail';

const Main = () => {
  return (<>
    <main className='main_title'></main>
    <Routes>
      <Route path="/Productos/" element={<ItemDetailContainer/>} />
      <Route path="/Productos/:id" element={<ItemDetailContainer/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/Contacto" element={<Contacto />} />
    </Routes>
  </>)
}
export default Main