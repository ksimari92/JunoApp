import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { JunoContext } from '../../context/JunoContext'
import carritoIMG from "../../assets/img/cesta-de-la-compra.png";

const CarritoIcon = () => {

  const {cantidadTotal} = useContext(JunoContext);

  return (
    <Link to={'/carrito'} style={{textDecoration:'none'}}>
    <div style={{marginRight:'10px'}}>
        <img src={carritoIMG} alt="Cart" style={{width: '2em'}} /><span  style={{fontSize: '1em', padding: '5px', marginLeft:'-10px', backgroundColor:'black', color: 'white', borderRadius:'40%'}}>{cantidadTotal}</span>
    </div>
    </Link>
  )
}

export default CarritoIcon