import React from 'react'
import { Link } from "react-router-dom"
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { context } from './CartContext'


const ItemDetail = ({cloth, showDetail}) => {

    const  { addCloth, removeCloth } = useContext(context)
    
    const onAdd = () => {
        addCloth(cloth)
    }

 


    return (<>
            <div className={`card mx-5 producto`}>
                <div className="card-body">
                <img src={cloth.image} className="card-img-top" alt="">{}</img>
                    <p className="card-text">{cloth.title}</p>
                    <p className="card-text">{cloth.price}</p>
                    {showDetail && <p className="card-text">{cloth.description}</p>}
                    {!showDetail && <Link to={`/Productos/${cloth.id}`}>Ver más</Link>}
                    {showDetail && <ItemCount stock={20} initial={0} onAdd={() => onAdd()}/>}
                </div>
                    
    </div>
                <div>
                {showDetail && <button className="carrito"><Link to="/Carrito">Finalizar compra</Link></button>}
                {showDetail && <button className="carrito" onClick={() => removeCloth(cloth.id)}>Vaciar carrito</button>}
                </div>
    </>)}

export default ItemDetail

