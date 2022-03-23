import React from 'react'
import { Route, Routes, Router } from 'react-router-dom';
import Carrito from './Carrito';
import Contacto from './Contacto';
import Home from './Home';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Main = () => {
  return (<>
    <main className='main_title'>MENÚ</main>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Productos/" element={<><ItemListContainer /><ItemDetailContainer /></>} />
    </Routes>
  </>)
}
export default Main