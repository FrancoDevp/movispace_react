import React from 'react'
import { Link } from "react-router-dom"
import ItemCount from './ItemCount'



const ItemDetail = ({cloth, showDetail}) => {
    const onAdd = (cantidadAgregada) => {
        console.log("Agregado", cantidadAgregada);
    }
    return (
            <div className={`card mx-5 ${showDetail ? "d-flex justify-content-center":" "}`}>
                <div className="card-body">
                <img src={cloth.image} className="card-img-top" alt="">{}</img>
                    <p className="card-text">{cloth.title}</p>
                    <p className="card-text">{cloth.price}</p>
                    {showDetail && <p className="card-text">{cloth.description}</p>}
                    {!showDetail && <Link to={`/Productos/${cloth.id}`}>Ver más</Link>}
                    {showDetail && <ItemCount stock={20} initial={0} onAdd={onAdd}/>}
                </div>
    </div>
)}

export default ItemDetail

