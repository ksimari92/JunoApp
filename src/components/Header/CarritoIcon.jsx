import React from 'react'
import {Link} from 'react-router-dom'

const CarritoIcon = () => {
  return (
    <Link to={'/carrito'}>
    <div style={{marginRight:'10px'}}>
        <img src="./src/assets/img/cesta-de-la-compra.png" alt="Cart" style={{width: '2em'}} /><span  style={{fontSize: '1em', padding: '5px', marginLeft:'-10px', backgroundColor:'grey', borderRadius:'40%'}}>1</span>
    </div>
    </Link>
  )
}

export default CarritoIcon