import React from 'react'
import Item from './Item.js'

const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map((producto) => {
            return <Item key={producto.id} productos={producto}/>
        })}
    </div>
  )
}

export default ItemList