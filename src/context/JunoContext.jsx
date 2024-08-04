import { createContext, useState } from "react";

export const JunoContext = createContext();

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (prod) => {
        setCarrito([...carrito, prod ])
        console.log(carrito)
    }

    const removerItem = (prodId) => {
        setCarrito(carrito.filter(prod => prod.id =! prodId));
    }

    const vaciarCarrito= () => {
        setCarrito([]);
    }

    return (
        <JunoContext.Provider value={{carrito, agregarAlCarrito, removerItem, vaciarCarrito}}>
            {children}
        </JunoContext.Provider>
    )
}