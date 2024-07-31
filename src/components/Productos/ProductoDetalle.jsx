import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductoDetalle = () => {

  const { id } = useParams();
  const [producto, setProducto] = useState({})


  const filtrarProducto = (url, id) => {
    fetch(`${url}/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }

  useEffect(() => {
    filtrarProducto('https://fakestoreapi.com/products', id)
  }, [producto])

  return (
    <div className='card-detalle'>
      <img src={producto.image} alt="" />
      <h4>{producto.title}</h4>
      <p>{producto.description}</p>
      <h5>{producto.price}</h5>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ProductoDetalle