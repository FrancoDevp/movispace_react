import React from 'react'
import Nav from './components/nav.js'
import Footer from './components/Footer.js'
import Main from './components/main.js'
import ItemListContainer from './components/ItemListContainer.js'
import Header from './components/Header.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import CartContext from './components/CartContext.js'

const App = () => {
  return <BrowserRouter>
          <CartContext>
            <Header/>
            <Nav/>
            <Main/>
          </CartContext>
            {/* <ItemListContainer/> */}
            {/* <ItemDetailContainer/> */}
            <ToastContainer/>
            <Footer/>
        </BrowserRouter>
}

export default App