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
            <button onClick={handleSumar}>Sumar invitacion</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleRestar}>Restar invitacion</button>
        </div>
    )
}
export default ItemCount