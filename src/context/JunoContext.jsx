import { createContext, useState } from "react";

export const JunoContext = createContext();

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (prod) => {
        setCarrito(prevCarrito => {
            const prodExistente = prevCarrito.find(item => item.id == prod.id);

            if (prodExistente) {
                return prevCarrito.map(item =>
                    item.id === prod.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCarrito, { ...prod, quantity: 1 }];
            }
        })
    }


    const removerItem = (prodId) => {
        setCarrito(
            prevCarrito =>
                prevCarrito
                    .map(item =>
                        item.id === prodId
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0)
        );
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const cantidadTotal = carrito.reduce((total, item) => total + item.quantity, 0)

    return (
        <JunoContext.Provider value={{ carrito, agregarAlCarrito, removerItem, vaciarCarrito, cantidadTotal }}>
            {children}
        </JunoContext.Provider>
    )

}