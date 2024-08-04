import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductoDetalle.css'
import { JunoContext } from '../../context/JunoContext';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const {agregarAlCarrito} = useContext(JunoContext);
1
  const filtrarProducto = (url, id) => {
    fetch(`${url}/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching product:', error));
  };

  useEffect(() => {
    filtrarProducto('https://fakestoreapi.com/products', id);
  }, [id]);

  return (
    <>
      {producto ? (
        <div className='card-detalle'>
          <img src={producto.image} alt={producto.title} />
          <h4>{producto.title}</h4>
          <p>{producto.description}</p>
          <h5>${producto.price}</h5>
          <button onClick={()=>{agregarAlCarrito(producto)}}>Agregar al carrito</button>
          <Link to={'/productos'}>Seguir comprando</Link>
        </div>
      ) : (
        "Cargando producto..."
      )}

    </>
  );
};

export default ProductoDetalle;