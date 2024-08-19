import React from 'react'
import './Home.css'

const Galeria = () => {


  return (
    <>
    <h3 style={{textAlign: 'center'}}>Productos destacados</h3>
    <div className='container-galeria'>
        <img src="/public/img/airForce.jpeg" alt="Nike" />
        <img src="/public/img/vans.jpeg" alt="vans" />
        <img src="/public/img/campus.jpg" alt="campus" />
    </div>
    </>
  )
}

export default Galeria