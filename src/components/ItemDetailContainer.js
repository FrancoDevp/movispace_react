import React from 'react'
import ItemDetail from './ItemDetail.js'
import { useState, useEffect } from 'react'
// import { useParams } from "react";

const ItemDetailContainer = () => {

    const [clothes, setClothes] = useState([])
    const [cargar, setCargar] = useState(true)
    // const {idClothes} = useParams()
    // ${idClothes}
    useEffect(() => {

        const solicitud = fetch(`https://fakestoreapi.com/products/`)
        .then((resultado) => {
            return resultado.json()
        })
        .then((respuesta) => {
            setClothes(respuesta);
            // console.table(respuesta);
        })
        .catch((error) => {
            console.log("salio mal");
        })
        
        const time = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(clothes)
                }, 20000)
            }) 
            console.log(clothes);

    },[])


    return (
            clothes.map(cloth => <ItemDetail cloth={cloth}/>)
    )
}







export default ItemDetailContainer