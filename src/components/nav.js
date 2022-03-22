import React, {FRAGMENT} from 'react'
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

const Nav = () => {
return  <>
        <nav className="navBar">
                <Link to="Home">Home</Link>
                <Link to="Productos">Productos</Link>
                <Link to="Contacto">Contacto</Link>
                <Link to="Invitaciones">Invitaciones</Link>
        </nav>
        </>
        
}

export default Nav