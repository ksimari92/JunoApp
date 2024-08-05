import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { JunoContext } from '../../context/JunoContext'

const CarritoIcon = () => {

  const {cantidadTotal} = useContext(JunoContext);

  return (
    <Link to={'/carrito'} style={{textDecoration:'none'}}>
    <div style={{marginRight:'10px'}}>
        <img src="./public/img/cesta-de-la-compra.png" alt="Cart" style={{width: '2em'}} /><span  style={{fontSize: '1em', padding: '5px', marginLeft:'-10px', backgroundColor:'black', color: 'white', borderRadius:'40%'}}>{cantidadTotal}</span>
    </div>
    </Link>
  )
}

export default CarritoIcon