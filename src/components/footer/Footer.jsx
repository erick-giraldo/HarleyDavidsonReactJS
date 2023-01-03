import React from "react";
import logo from "../../assets/images/logo.webp";

import "../../assets/scss/index.scss";

const Footer = () => {
  return (

    <footer className="col-lg-12 col-md-12 footer footer-container">
      <div className="redes">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
      <p>© 2022. Designed by Erick Giraldo. All right reserved.</p>
      <img src={logo} alt="logo-footer" width="50px" />
    </footer>

  )
}

export default Footer