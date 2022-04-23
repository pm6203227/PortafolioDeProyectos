import React from 'react';
import "./Navbar.css";
import mylogo from "../../media/mylogo.jpeg";


const Navbar= () => {
  

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://github.com/pm6203227" target="_blank" rel="noreferrer">
          <img src={mylogo} alt="" width="80" height="55" class="d-inline-block  align-text-center" />
          Pasa a dar un vistazo a mi Github!!!
        </a>
      </div>
</nav>
  );
};

export default Navbar;
