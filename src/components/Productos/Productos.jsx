import React from 'react';

import "./Productos.css"
import { Producto } from './Producto';

const Productos = ({ productos }) => {
    return (
        <div className='container-prod'>
            {productos.map(prod => <Producto prod={prod}/>)}
        </div>
    );
}

export default Productos;