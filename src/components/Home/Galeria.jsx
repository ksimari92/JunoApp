import React from 'react'
import './Home.css'

const Galeria = () => {


  return (
    <>
    <h3 style={{textAlign: 'center'}}>Productos destacados</h3>
    <div className='container-galeria'>
        <img src="/src/assets/img/airForce.jpeg" alt="Nike" />
        <img src="/src/assets/img/vans.jpeg" alt="vans" />
        <img src="/src/assets/img/campus.jpg" alt="campus" />
    </div>
    </>
  )
}

export default Galeria