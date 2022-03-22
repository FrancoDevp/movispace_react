import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"


let productosArray = [
  {
    nombre: "zapatillas",
    precio: "$300",
    id: "1"
  },

  {
    nombre: "buzo",
    precio: "$200",
    id: "2"
  },

  {
    nombre: "gorra",
    precio: "$100",
    id: "3"
  }

]


const ItemListContainer = () => {

  const [cargar, setCargar] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    toast.info()
    const pedido = new Promise((resolve, error) => {

      setTimeout(() => {
        resolve(productosArray)
      }, 5000)
    })

    pedido
      .then((resultado) => {
        console.log("estuvo bien");
        setProductos(resultado)
        toast.dismiss()
      })
      .catch((error) => {
        console.log("esta mal");
        toast.error()
      })


  }, [])
  console.log(productosArray);

  return (
    <div>
      <button className="btn-lg p-1 btn btn-dark" onClick={() => setCargar(!cargar)}>Listado de productos</button>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer