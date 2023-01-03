import React from "react";
import { Link } from "react-router-dom";
import bgUS from "../../assets/images/nosotros.webp";

import '../../assets/scss/index.scss'

const AboutUS = () => {
  return (
    <main className="col-lg-10 col-md-12 col-sm-12 main-container">
     <div className="referencia">
        <nav aria-label="breadcrumb">
          <ol className="descolgado breadcrumb">
            <li className="breadcrumb-item">
            <li className="breadcrumb-item"><Link to='/'>Inicio</Link></li>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Nosotros
            </li>
          </ol>
        </nav>
      </div>
      <div className="row nosotros-contenido">
        <div className="col-lg-6 col-md-12 col-sm-12 nosotros-containerA">
          <h1>Sobre Nosotros</h1>
          <p>
            En 1903, en un pequeño cobertizo de Milwaukee, Wisconsin, cuatro
            jóvenes iniciaron un cambio cultural que crecería y se extendería a
            través de áreas geográficas y generaciones. La innovación y la
            imaginación de lo que era posible sobre dos ruedas generó una
            revolución en el transporte y un estilo de vida que convertiría a
            Harley-Davidson en una de las marcas más deseadas del mundo. En la
            actualidad, seguimos definiendo la cultura y el estilo de vida de
            las motocicletas mediante la evocación de emociones conmovedoras que
            se ven reflejadas en cada producto y experiencia que ofrecemos, como
            lo hemos hecho por más de un siglo y como lo seguiremos haciendo
            para las próximas generaciones.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 nosotros-containerB">
          <img src={bgUS}  alt='nosotros-img'/>
          <p className="nosotros-sub">Nuestra misión</p>
          <p>
            Más que la fabricación de máquinas, representamos la eterna búsqueda
            de aventura. Libertad para el espíritu
          </p>
          <p className="nosotros-sub">Nuestra visión</p>
          <p>
            Crear nuestra leyenda y liderar la industria mediante la innovación,
            la evolución y la emoción.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUS;
