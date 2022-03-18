import React from 'react'
import ItemDetail from './ItemDetail.js'
import { useState, useEffect } from 'react'
// import { useParams } from "react";

const ItemDetailContainer = () => {

    const [clothes, setClothes] = useState([])
    const [cargar, setCargar] = useState(true)

    useEffect(() => {

        const solicitud = fetch(`https://fakestoreapi.com/products?limit=4`)
            .then((resultado) => {
                return resultado.json()
            })
            .then((respuesta) => {
                console.log("Esperando 2'");
                setTimeout(() => {
                    console.log("LISTO");
                    setClothes(respuesta);
                }, 2000)
            })
            .catch((error) => {
                console.log("salio mal");
            })

    }, [])


    return (
        <div className="d-flex justify-content-center m-5">
            {clothes.map(cloth => <ItemDetail cloth={cloth} />)}
        </div>
    )
}


export default ItemDetailContainer