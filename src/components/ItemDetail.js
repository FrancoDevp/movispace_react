import React from 'react'
import NIKE from '../assets/img/NIKE.jpg'
import { Link } from "react-router-dom"


const ItemDetail = ({cloth}) => {
    return (
            <div className="card mx-5">
                <img src={cloth.image} className="card-img-top" alt="NIKE">{}</img>
                <div className="card-body">
                    <p className="card-text">{cloth.title}</p>
                    <p className="card-text">{cloth.price}</p>
                    <Link to={`/producto/${cloth.id}`}>ver más</Link>
                </div>
    </div>
)}


export default ItemDetail