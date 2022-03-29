import React from 'react'
import { useState } from 'react'



const ItemCount = ({ stock, initial, onAdd}) => {
    let [amigos, setAmigos] = useState(0)

    const handleSumar = () => {
        if (amigos < 10) {
            setAmigos(amigos + 1)
        }
    }

    const handleRestar = () => {
        if (amigos > initial) {
            setAmigos(amigos - 1)
        }
    }

    const handleAgregar = () => {
        onAdd(amigos)
    }


    return (
        <div className='contador'>
            <p>Productos {amigos}</p>
            <button onClick={handleRestar} className='btn btn-danger'>-</button>
            <button onClick={handleAgregar} className='btn btn-warning'>Add to car</button>
            <button onClick={handleSumar} className='btn btn-success'>+</button>
        </div>
    )
}
export default ItemCount