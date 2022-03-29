import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import ItemCount from './ItemCount'

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
  const { idRopa } = useParams()


  useEffect(() => {
    toast.info()
    const pedido = new Promise((resolve, error) => {

      setTimeout(() => {
        resolve(productosArray)
      }, 1000)
    })

    pedido
      .then((resultado) => {
        if(idRopa){
         setProductos(resultado.filter(producto => producto.id === idRopa))
        } else {
          setProductos(resultado)
        }
        console.log("estuvo bien");
        toast.dismiss()
      })
      .catch((error) => {
        console.log("esta mal");
        toast.error()
      })


  }, [])

    useEffect(() => {
    },[productos])


  console.log(productosArray);

  return (
    <div>
      <h1 className="" onClick={() => setCargar(!cargar)}>Listado de productos</h1>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer