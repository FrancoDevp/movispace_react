import { createContext, useState } from 'react'

export const context = createContext()
const { Provider } = context

const CartContext = ({ children }) => {

    const { carrito, setCarrito } = useState([])
    const { cantidad, setCantidad } = useState(0)
    const { total, setTotal } = useState(0)

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