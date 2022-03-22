import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    let [amigos, setAmigos] = useState(0)

    const handleSumar = () => {
        if (amigos < 5) {
            setAmigos(amigos + 1)
        }
    }

    const handleRestar = () => {
        setAmigos(amigos - 1)
    }

    const handleReset = () => {
        setAmigos(0)
    }


    return (
        <div className='contador'>
            <p>Invitar amigos: {amigos}</p>
            <button onClick={handleSumar} className='btn btn-success'>Sumar invitacion</button>
            <button onClick={handleReset} className='btn btn-warning'>RESET</button>
            <button onClick={handleRestar} className='btn btn-danger'>Restar invitacion</button>
        </div>
    )
}
export default ItemCount