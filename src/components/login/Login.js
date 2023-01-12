import React, { useState } from "react";
import "./assets/scss/Login.scss";
import logo from "../assets/images/logo.webp";
import facebook from "./assets/images/iconos/facebook.webp";
import gmail from "./assets/images/iconos/gmail.webp";

export const Login = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const isLogin = login ? "active" : "";
  const isRegister = register ? "active" : "";

  const setShowLogin = () => {
    setLogin(!login);
    setRegister(!register);
  };
  const setShowRegister = () => {
    setRegister(!register);
    setLogin(!login);
  };

  return (
    <div
      className="container w-75 bg-light mt-5 rounded-3 shadow"
      id="login-sesion"
    >
      <div className="row align-items-stretch">
        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6" />
        <div className="col bg-white p-3 rounded-3">
          <div className="text-end">
            <img src={logo} alt="Logo" width="60x" height="60px" />
          </div>
          {/*LOGIN*/}
          <div id="login" className={`login ${isLogin}`}>
            <h2 className="fw-bold text-center py-5">Bienvenidos</h2>
            <div className="users-icon" id="users-text">
              <i className="fa fa-duotone fa-user-secret" />
              <ul className="tooltip-data" id="tooltip-text" />
              {/* <p className="load-credentials">Cargando.....</p> */}
            </div>
            <form action="#" method="post">
              <div className="mb-4">
                <label htmlFor="user" className="form-label">
                  Ingrese su Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user"
                  id="user"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="pass" className="form-label">
                  Ingrese su Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="pass"
                />
              </div>
              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  name="connected"
                  className="form-check-input"
                  id="checked"
                />
                <label htmlFor="checked" className="form-check-label">
                  Mantener la sesión activa
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btn-log-submit"
                >
                  <div className="spinnerLog" />
                  <div className="log-submit">Iniciar Sesión</div>
                </button>
              </div>
              <div className="my-3">
                <span>
                  No tienes cuenta?
                  <a href="#" id="register-btn" onClick={setShowLogin}>
                    Regístrate
                  </a>
                </span>
                <br />
                <span>
                  <a href="#">Recuperar Password</a>
                </span>
              </div>
            </form>
            {/*--- LOGIN CON REDES SOCIALES*/}
            <div className="container w-100 my-5">
              <div className="row text-center">
                <div className="col12">Inicia Sesion</div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-outline-primary w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img
                          src={facebook}
                          width="30px"
                          height="30px"
                          alt="Facebook"
                        />
                      </div>
                      <div className="col-12 col-md-10 text-center">
                        Facebook
                      </div>
                    </div>
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-outline-danger w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img
                          src={gmail}
                          width="30px"
                          height="30px"
                          alt="Facebook"
                        />
                      </div>
                      <div className="col-12 col-md-10 text-center">Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*Register*/}
          <div id="register" className={`register ${isRegister}`}>
            <h2 className="fw-bold text-center py-5">Aun no tienes Cuenta?</h2>
            <p>Registrate para que puedas iniciar sesión</p>
            <form action="#" method="post">
              <div className="mb-4">
                <label htmlFor="user" className="form-label">
                  Ingrese su Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user"
                  id="user-reg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="pass" className="form-label">
                  Ingrese su Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="pass-reg"
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btn-reg-submit"
                >
                  <div className="spinnerReg" />
                  <div className="reg-submit">Registrarse</div>
                </button>
              </div>
              <div className="my-3">
                <span>
                  Ya tienes cuenta?
                  <a href="#" id="login-btn" onClick={setShowRegister}>
                    Inicia Sesión
                  </a>
                </span>
                <br />
                <span>
                  <a href="#">Recuperar Password</a>
                </span>
              </div>
            </form>
            {/*--- LOGIN CON REDES SOCIALES*/}
            <div className="container w-100 my-5">
              <div className="row text-center">
                <div className="col12">Inicia Sesion</div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-outline-primary w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img
                          src={facebook}
                          width="30px"
                          height="30px"
                          alt="Facebook"
                        />
                      </div>
                      <div className="col-12 col-md-10 text-center">
                        Facebook
                      </div>
                    </div>
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-outline-danger w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img
                          src={gmail}
                          width="30px"
                          height="30px"
                          alt="Facebook"
                        />
                      </div>
                      <div className="col-12 col-md-10 text-center">Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
