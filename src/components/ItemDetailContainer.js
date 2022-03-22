import React from 'react'
import ItemDetail from './ItemDetail.js'
import Carrito from './Carrito.js'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [clothes, setClothes] = useState([])
    const [cargar, setCargar] = useState(true)

    const result = useParams()

    useEffect(() => {

        toast.info("Cargando productos");
        const solicitud = fetch(`https://fakestoreapi.com/products?limit=4`)
            .then((resultado) => {
                return resultado.json()
            })
            .then((respuesta) => {
                toast.dismiss()
                setTimeout(() => {
                    console.log("LISTO");
                    setClothes(respuesta);
                }, 3000)
            })
            .catch((error) => {
                toast.error()
                console.log("salio mal");
            })

    }, [])


    return (
        <div className="d-flex justify-content-center m-5">
            {clothes.map(cloth => <ItemDetail key={cloth.id} cloth={cloth} />)}
            <Routes>
                <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
        </div>
    )
}


export default ItemDetailContainer