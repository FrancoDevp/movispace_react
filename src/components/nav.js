import React, {FRAGMENT} from 'react'
import { Link } from "react-router-dom";
import { Route, Routes, Router } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

const Nav = () => {
return  <>
        <nav className="navBar">
                <Link to="Home">Home</Link>
                <Link to="Productos">Productos</Link>
                <Link to="Contacto">Contacto</Link>
        </nav>
        
        </>
        
}

export default Nav