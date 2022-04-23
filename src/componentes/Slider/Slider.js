import React from "react";
import "./Slider.css"
import {Carousel} from "react-bootstrap";
import facebook from "../../media/facebook.png";
import miweb from "../../media/miweb.png";
import spotify from "../../media/spotify.png";
import calculadora from "../../media/calculadora.png"

const Slider = () => {
  return (
    <div className="slider"><br /><br /><br /><br />
      <h1 className="slider-title"><b>Proyectos que he desarrollado</b></h1> <br /><br />
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={facebook}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className="title"><b>login de Facebook</b></h3>
            <p className="title">Creado con CSS y HTML puro</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={calculadora}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3 className="title1"><b>Proyecto de calculadora</b></h3>
            <p className="title1">Creado con REACT</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={spotify}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className="title">Proyecto de Spotify</h3>
            <p className="title">Es el proycto mas grande en el que he trabajado</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={miweb}
            alt="Fourth slide"
            />

            <Carousel.Caption>
            <h3>Proyecto 3</h3>
            <p>Pagina creada con html y css puro.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider;