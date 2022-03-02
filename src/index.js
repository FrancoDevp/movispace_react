// 1. Necesitamos la variable react
import react from 'react'

// 2. Necesitamos la ReactDOM react
import ReactDOM from 'react-dom'

// 3. Necesitamos un componente de scoped

import App from './App.js'
import "./estilos.css"

// 4. necesitamos poner el componente en el DOM
ReactDOM.render(<App/>, document.getElementById("root"))
