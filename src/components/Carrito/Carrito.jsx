import React, { useContext } from 'react'
import { JunoContext } from '../../context/JunoContext'
import './Carrito.css'

const Carrito = () => {
    const { carrito, removerItem, vaciarCarrito, totalPrecio } = useContext(JunoContext);

    return (
        <div className='contenedor-carrito'>
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {carrito.map(product => (
                        <li key={product.id}>
                            <p className='descripcion'> {product.title} - ${product.price} x {product.quantity}</p>
                            <button onClick={() => removerItem(product.id)}>Eliminar 1</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: ${totalPrecio}</h2>

            {carrito.length > 0 && <button onClick={vaciarCarrito}>Vaciar Carrito</button>}
        </div>
    )
}

export default Carrito