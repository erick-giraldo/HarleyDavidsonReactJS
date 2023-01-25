import React, { useState } from "react";
import logo from "../../assets/images/logo.webp";
import facebook from "../../assets/images/iconos/facebook.webp";
import gmail from "../../assets/images/iconos/gmail.webp";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/scss/index.scss";

export const Register = () => {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const isRegister = register ? "active" : "";

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
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
          <div id="register" className="register">
            <h2 className="fw-bold text-center py-5">Registrate</h2>
            <form onSubmit={handleSubmitRegister}>
              <div className="mb-4">
                <label htmlFor="user" className="form-label">
                  Ingrese su Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary-auth"
                  id="btn-reg-submit"
                >
                  <div className="spinnerReg" />
                  <div className="reg-submit">Registrarse</div>
                </button>
              </div>
              <div className="my-3">
                <span>
                  Ya tienes cuenta? <Link to={`/login`}>Inicia Sesión</Link>
                </span>
                <br />
                <span>
                  <a href="/">Recuperar Password</a>
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
