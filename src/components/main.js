import React from 'react'
import { useState } from 'react'

const Main = (participante) => {

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




  return (<>
    <main className='main_title'>Bienvenido participante numero  {participante, [1]} !
      <div className='contador'>
        <p>Invitar amigos: {amigos}</p>
        <button onClick={handleSumar}>Sumar invitacion</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleRestar}>Restar invitacion</button>
      </div>

    </main>
  </>
  )
}

export default Main