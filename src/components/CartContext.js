import { createContext, useState } from 'react'

export const context = createContext()
const { Provider } = context

const CartContext = ({ children }) => {

    const { carrito, setCarrito } = useState([])
    const { cantidad, setCantidad } = useState(0)
    const { total, setTotal } = useState(0)

    const addCloth =  (producto, nuevaCantidad) => {

        console.log(producto.price * nuevaCantidad);

        const copia = carrito.slice(0)
            copia.push({...producto, nuevaCantidad})
            setCarrito(copia)
            setCantidad(cantidad + nuevaCantidad)
            setTotal(total + producto.price * nuevaCantidad)
    }



    const productosCarrito = {
        carrito,
        cantidad,
        total,
    }

    

    return (
        <Provider value={productosCarrito}>
            {children}
        </Provider>
    )
}

export default CartContext