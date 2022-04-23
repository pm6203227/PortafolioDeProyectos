/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./About.css";
import hola from "../../media/hola.jpeg";
import ht from  "../../media/ht.png";
import ja from  "../../media/ja.png";
import cs from  "../../media/cs.png";
import re from "../../media/re.png";
import bootstrap from "../../media/bootstrap.png";
import glogo from "../../media/glogo.png";



const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc text-center">
            <h1><b>Dejame contarte algo sobre mi</b></h1>
            <p>Soy estudinate de 8vo semestre de la ingenieria mecanica electrica en la Universidad de Guadalajara 
            , con algunos cursos de desarrollo web Front-end impartidos por Coursera, Google y de forma autodidacta en libros de
            Web development y teniendo contacto con el entorno de desarrollo Visual Studio Code.</p>
            <h3 className="subtitle"><b>Mis habilidades</b></h3>
            <img className="logos" src={ht} />
            <img className="logos" src={ja} />
            <img className="logos" src={cs} />
            <img className="logos" src={re} />
            <img className="logos" src={bootstrap} />
            <img className="logos" src={glogo} /><br />
        </div>
        <div className="about">
            <img className='img-responsive' src={hola} />
        </div>
    </div>
  )
}

export default About