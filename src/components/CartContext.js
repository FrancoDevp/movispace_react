import { createContext, useState, useEffect } from 'react'

export const context = createContext()
const { Provider } = context

const CartContext = ({ children }) => {

    const [ carrito, setCarrito ] = useState([])
    const [cantidad, setCantidad ] = useState(0)
    const [ total, setTotal ] = useState(0)

       const addCloth =  (cloth, nuevaCantidad) => {
        setCantidad(cantidad + nuevaCantidad)
        setTotal(total + cloth.price * nuevaCantidad)
        if (existeDuplicados(cloth.id)) {
            console.log("Ya existe");
            const index = carrito.indexOf(cloth)
            const newItem = {...cloth, cantidad: cloth.cantidad + nuevaCantidad}
            const newCarrito = [...carrito.slice(index, 1), newItem]
            setCarrito(newCarrito) 
        } else {
            setCarrito([...carrito, {...cloth, cantidad: nuevaCantidad}])
        }
    }

    const existeDuplicados = (id) => {
        return carrito.some(cloth => cloth.id === id)
    }

    const removeCloth = (id) => {
        const index = carrito.findIndex(cloth => cloth.id === id)
        const newCarrito = [...carrito.slice(0, index), ...carrito.slice(index + 1)]
        setCarrito(newCarrito)
    }

    useEffect(() => {
        console.log("carrito", carrito);
    },[carrito])

    const productosCarrito = {
        carrito,
        cantidad,
        total,
        addCloth: addCloth,
        removeCloth: removeCloth,
    }

    

    return (
        <Provider value={productosCarrito}>
            {children}
        </Provider>
    )
}

export default CartContext