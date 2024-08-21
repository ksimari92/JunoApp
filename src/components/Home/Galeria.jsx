import React from 'react'
import './Home.css'
import img1 from "../../assets/img/airForce.jpeg"
import img2 from "../../assets/img/vans.jpeg"
import img3 from "../../assets/img/campus.jpg"

const Galeria = () => {


  return (
    <>
    <h3 style={{textAlign: 'center'}}>Productos destacados</h3>
    <div className='container-galeria'>
        <img src={img1} alt="Nike" />
        <img src={img2} alt="vans" />
        <img src={img3} alt="campus" />
    </div>
    </>
  )
}

export default Galeria