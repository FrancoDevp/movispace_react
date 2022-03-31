import React from 'react'
import ItemDetail from './ItemDetail.js'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [clothes, setClothes] = useState([])
    const [ showDetail, setShowDetail ] = useState(false)
    const [cargar, setCargar] = useState(true)
    const parametro = useParams()

    useEffect(() => {
        toast.info("Cargando productos");
        if (parametro.id) {
            console.log("HOLA");
            fetch(`https://fakestoreapi.com/products/${parametro.id}`)
                .then(res => res.json())
                .then(data => {
                    setClothes([data])
                    setCargar(false)
                    setShowDetail(true)
                })
        } else {
            fetch(`https://fakestoreapi.com/products?limit=10`)
                
                    
                .then((resultado) => {
                    console.log(resultado);
                    return resultado.json()
                })
                .then((respuesta) => {
                    toast.dismiss()
                    setShowDetail(false)
                    setTimeout(() => {
                        console.log("LISTO");
                        setClothes(respuesta);
                    }, 1000)
                })
                .catch((error) => {
                    toast.error()
                    console.log("salio mal");
                })

        }


    }, [parametro])


    return (
        <div className="m-5 box">
            {clothes.map(cloth => <ItemDetail key={cloth.id} cloth={cloth} showDetail={showDetail} />)}
        </div>
    )
}


export default ItemDetailContainer