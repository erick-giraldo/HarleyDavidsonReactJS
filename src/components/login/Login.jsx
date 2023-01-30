import React, { useState } from "react";
import logo from "../../assets/images/logo.webp";
import facebook from "../../assets/images/iconos/facebook.webp";
import gmail from "../../assets/images/iconos/gmail.webp";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../assets/scss/index.scss";

export const Login = () => {
  const { login, loginWithGoogle, resetPassword, setLoading } = useAuth();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      setLoading(true)
      navigate('/', {state:true});
    } catch (error) {
      setError(error.message);
    }
  };
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      setLoading(true)
      navigate('/', {state:true});
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
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
          {/*LOGIN*/}
          <div id="login" className="login">
            <h2 className="fw-bold text-center py-5">Bienvenidos</h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="mb-4">
                <label htmlFor="user" className="form-label">
                  Ingrese su Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
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
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary-auth"
                  id="btn-log-submit"
                >
                  <div className="spinnerLog" />
                  <div className="log-submit">Iniciar Sesión</div>
                </button>
              </div>
              <div className="my-3">
                <span>
                  No tienes cuenta?{" "}
                  <Link
                  to={`/register`}
                  >
                  Regístrate
                  </Link>
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
                  <button className="btn btn-outline-danger w-100 my-1" onClick={handleGoogleSignin}> 
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
