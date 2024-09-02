import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { JunoContext } from '../../context/JunoContext'
import { GiShoppingCart } from "react-icons/gi";
const CarritoIcon = () => {

  const {cantidadTotal} = useContext(JunoContext);

  return (
    <Link to={'/carrito'} style={{textDecoration:'none'}}>
    <div style={{marginRight:'10px'}}>
        <GiShoppingCart size={32} /><span  style={{fontSize: '0.7em', padding: '5px', marginLeft:'-5px', backgroundColor:'black', color: 'white', borderRadius:'50%'}}>{cantidadTotal}</span>
    </div>
    </Link>
  )
}

export default CarritoIcon