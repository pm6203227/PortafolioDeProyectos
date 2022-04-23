import React from 'react';
import "./Cover.css";
import programar from "../../media/programar.mp4";

const Cover = () => {
  return (
    <div className='cover-Container'>
      <video className='video' src={programar} autoPlay loop muted />  
      <h1>Hola, soy Juan Armando Amezquita Martin</h1>
      <p className='cover-title'>Desarrollador Front-end junior</p>
    </div>
  )
}

export default Cover