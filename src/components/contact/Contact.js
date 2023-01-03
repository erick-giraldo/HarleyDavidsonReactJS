import React from "react";
import { Link } from "react-router-dom";

import "../../assets/scss/index.scss";

const Contact = () => {
  return (
    <main className="col-lg-10 col-md-12 col-sm-12 main-container">
        <div className="referencia">
          <nav aria-label="breadcrumb">
            <ol className="descolgado breadcrumb">
              <li className="breadcrumb-item">
                <li className="breadcrumb-item">
                  <Link to="/">Inicio</Link>
                </li>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacto
              </li>
            </ol>
          </nav>
        </div>
        <div className="row contacto-contenido">
          <div className="col-lg-6 col-md-6 col-sm-12 contacto-containerA">
            <div>
              <p>
                Completa el siguiente formulario, y un mienbro de nuestro equipo
                se pondra en contacto contigo para brindarte mayor información
              </p>
            </div>
            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="nombre">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese su Nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Ingrese sus Apellidos"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sexo">Ingrese su Sexo</label>
                  <select className="form-control" id="sexo">
                    <option>Seleccione Sexo</option>
                    <option>Hombre</option>
                    <option>Mujer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contacto">Comentario</label>
                  <textarea
                    className="form-control"
                    id="contacto"
                    rows={8}
                    defaultValue={""}
                  />
                </div>
              </form>
              <div className="contacto-btn">
                <button type="button" className="btn btn-outline-primary">
                  Enviar
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 contacto-containerB">
            <div>
              <iframe
                title="Localización de la tienda"
                className="googleMaps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.471616076864!2d-77.02933308510502!3d-12.0798322458057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8895ac7c7c1%3A0xef3f398f5b1cea8!2sHarley-Davidson%20Lima!5e0!3m2!1ses!2spe!4v1658116068100!5m2!1ses!2spe"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <h1>Ubicación</h1>
              <div className="col-md-12 icono-ubuicacion">
                <i className="col-md-1 fa-solid fa-mobile-screen" />
                <p className="col-md-11">
                  Celular y Whastapp: 986 649 609 / 994 077 909
                </p>
              </div>
              <div className="col-md-12 icono-ubuicacion">
                <i className="col-md-1 fa-solid fa-envelope" />
                <p className="col-md-11">ventas@harleydavidsonlima.com</p>
              </div>
              <div className="col-md-12 icono-ubuicacion">
                <i className="col-md-1 fa-solid fa-location-pin" />
                <p className="col-md-11">
                  Av. Paseo de la República 1647, La Victoria Lima.
                </p>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default Contact;
