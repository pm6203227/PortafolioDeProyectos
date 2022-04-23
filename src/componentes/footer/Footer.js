import React from 'react';
import "./Footer.css";
import flogo from '../../media/flogo.png';
import glogo from '../../media/glogo.png';
import maillogo from '../../media/maillogo.png';

const Footer = () => {
  return (
    <footer className="footer cntainer-fluid">
        <div className="footer-container">
            <h3> Contactame!!</h3>
        </div>
        <div className="sns-links">
            <a  href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i ><img className="lo" src={flogo} alt="logo facebook" /></i>
            </a>
            <a href="https://github.com/pm6203227" target="_blank" rel="noopener noreferrer">
                <i><img className="lo" src={glogo} alt="logo facebook" /></i>
            </a>
            <a href="mailto:pm6203227@gmail.com"  target="_blank" rel="noopener noreferrer">
                <i><img className="lo" src={maillogo} alt="logo facebook" /></i>
            </a>
        </div>
        <div className="hecho">
            <h3>Desing by Juan Armando Amezquita Martin</h3>
        </div>
    </footer>
  )
}

export default Footer