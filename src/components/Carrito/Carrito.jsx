import React, { useContext } from 'react'
import { JunoContext } from '../../context/JunoContext'

const Carrito = () => {
    const { carrito, removerItem, vaciarCarrito } = useContext(JunoContext)
    return (
        <div>
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {carrito.map(product => (
                        <li key={product.id}>
                            {product.title} - ${product.price} x {product.quantity}
                            <button onClick={() => removerItem(product.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            {carrito.length > 0 && <button onClick={vaciarCarrito}>Vaciar Carrito</button>}
        </div>
    )
}

export default Carrito