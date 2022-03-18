import React from 'react'
import NIKE from '../assets/img/NIKE.jpg'


const ItemDetail = ({cloth}) => {
    return (<>
        <div className="d-flex justify-content-center m-5">
            <div className="card mx-5">
                <img src={cloth.image} className="card-img-top" alt="NIKE">{}</img>
                <div className="card-body">
                    <p className="card-text">{cloth.title}</p>
                    <p className="card-text">{cloth.price}</p>
                </div>
            </div>
            <div className="card mx-5">
                <img src={cloth.image} className="card-img-top" alt="NIKE"></img>
                <div className="card-body">
                    <p className="card-text">{cloth.title}</p>
                    <p className="card-text">{cloth.price}</p>
                </div>
            </div>
        </div>
    </>
)}


export default ItemDetail