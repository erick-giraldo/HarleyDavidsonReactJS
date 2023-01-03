import { Link } from "react-router-dom";
import bgBanner from "../../assets/images/Harley-Davidson-bg-1.webp";
import "../../assets/scss/index.scss";

import React from 'react'

const Home = () => {
  return (
    <>
    <main className="main card-container m-scrl">
      <div className="contenido">
        <div className="row container-both">
          <div className="col-lg-6 col-md-12 contenido-container">
            <h1>Harley-Davidson®</h1>
            <p>Lima</p>
            <ul>
              <li>
                Realizamos sueños inspirados por las carreteras del mundo.
                Creamos experiencias extraordinarias para los amantes de
                nuestra marca.
              </li>
              <li>
                Ofrecemos motocicletas nuevas, ropa y accesorios, partes,
                servicio técnico autorizado
              </li>
              <li>
                Aprendemos de la experiencia y celebramos nuestros éxitos.
              </li>
            </ul>
            <div className="btn-container">
              <Link
                to='/contacto'
                className="btn-hover btn-inicio"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="container col-lg-6 col-md-12 contenido-imagen">
            <img
              className="img-fluid"
              src={bgBanner}
              alt="Harley-Davidson-bg-1"
              width="600px"
            />
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default Home
