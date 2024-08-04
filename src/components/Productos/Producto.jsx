import React from 'react'
import { Link, useParams } from 'react-router-dom';


export const Producto = ({ prod }) => {
    const { id } = useParams();

    return (
        <div className="card">
            <img src={prod.image} alt={prod.title} />
            <h5>{prod.title}</h5>
            <p className="price">${prod.price}</p>
            <Link to={`/productos/${prod.id}`}>
                <p><button>Ver más</button></p>
            </Link>
        </div>
    )
}
