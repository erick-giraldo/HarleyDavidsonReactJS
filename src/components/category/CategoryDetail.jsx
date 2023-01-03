import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProductsController from "../../backend/products/ProductsController";
import CircularProgress from "@mui/material/CircularProgress";
import Button from '@mui/material/Button';
import VideoPlayer from "./VideoPlayer";
import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const CategoryDetail = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const { id } = useParams();

  useEffect(() => {
    ProductsController.getProductById({
      id,
      setProducts,
      setLoading,
    });
  }, [id]);

  const onAdd = (quantity) => {
    showAlert();
    setGoToCart(true);
    addProduct(products, quantity);
  };

  const showAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const renderItemCount = () => {
    if (products.stock > 0) {
      return (
        <>
          {goToCart ? (
           <>
            <Link
              to="/cart"
              className="font-poppins border-2 p-1  hover:border-green-600"
            >
              <Button variant="contained" color="success">
              Ir al carrito
              </Button>
            </Link>
             <Link
             to="/category"
             className="font-poppins border-2 p-1  hover:border-green-600"
           >
             <Button variant="contained" color="success">
             Seguir Comprando
             </Button>
           </Link></>
          ) : (
            <ItemCount stock={products.stock} initial={1} onAdd={onAdd} />
          )}
        </>
      );
    } else {
      return (
        <>
          <p className=" font-poppins font-bold text-1xl">
            No hay stock del producto deseado :(
          </p>
        </>
      );
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading">
        <CircularProgress />
        </div>
      ) : (
        <div className="col-lg-10 col-md-12 col-sm-12 main-container m-scrl">
          <div className="video-player">
            <VideoPlayer />
          </div>
          <div className="container-category">
            <div className="col-12 hero-360__title-block">
              <div className="title-category eyebrow-hero">Harley</div>
              <h1 className="name-category">{products.name}</h1>
              <div className="category-description">
                <span>{products.description}</span>
                <div className="starburst example" id="example-2">
                  <span>${products.price}</span>
                </div>
              </div>
            </div>
            <div className="hero-360__bike-block">
              <div className="row">
                <div>
                  <div className="image-category">
                    <img src={products.image} alt={products.name} />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-hero">
              <div className="hero-category">
                <div className="selector-panel">
                  <div
                    className="selector-panel-item-title"
                    id="selector_panel_item_title"
                  >
                    Opciones de color
                  </div>
                  <div className="color-selector fade-colors">
                    <ul
                      className="color-selector__list"
                      role="radiogroup"
                      aria-labelledby="selector_panel_item_title"
                      data-click-scroll
                      data-color-swatches
                      data-type="wrapper"
                      data-name="colorpicker"
                      data-value="Color Picker"
                    >
                      <li
                        className="color-selector__item"
                        data-type="element"
                        data-name="item"
                        data-value="Vivid Black"
                      >
                        <input
                          className="color-selector__input"
                          aria-checked="true"
                          type="radio"
                          id="2022-sportster-s-010"
                          name="360-color"
                          defaultValue="Vivid Black"
                        />
                        <label
                          htmlFor="2022-sportster-s-010"
                          className="color-selector__label"
                          style={{ backgroundColor: "#1c1c1c" }}
                          aria-label="Vivid Black"
                        >
                          <span className="color-selector__secondary">
                            <span />
                          </span>
                        </label>
                      </li>
                      <li
                        className="color-selector__item"
                        data-type="element"
                        data-name="item"
                        data-value="White Sand Pearl"
                      >
                        <input
                          className="color-selector__input"
                          aria-checked="true"
                          type="radio"
                          id="2022-sportster-s-f57"
                          name="360-color"
                          defaultValue="White Sand Pearl"
                        />
                        <label
                          htmlFor="2022-sportster-s-f57"
                          className="color-selector__label"
                          style={{ backgroundColor: "#c5bcb2" }}
                          aria-label="White Sand Pearl"
                        >
                          <span className="color-selector__secondary">
                            <span style={{ backgroundColor: "" }} />
                          </span>
                        </label>
                      </li>
                      <li
                        className="color-selector__item"
                        data-type="element"
                        data-name="item"
                        data-value="Mineral Green Metallic"
                      >
                        <input
                          className="color-selector__input"
                          aria-checked="true"
                          type="radio"
                          id="2022-sportster-s-f59"
                          name="360-color"
                          defaultValue="Mineral Green Metallic"
                          defaultChecked="checked"
                        />
                        <label
                          htmlFor="2022-sportster-s-f59"
                          className="color-selector__label active"
                          style={{ backgroundColor: "#6e6b39" }}
                          aria-label="Mineral Green Metallic"
                        >
                          <span className="color-selector__secondary">
                            <span style={{ backgroundColor: "" }} />
                          </span>
                        </label>
                      </li>
                    </ul>
                    <ul className="color-selector__details hero-360__details">
                      <li
                        className="hero-360__detail"
                        aria-hidden="true"
                        data-paint-id="2022-sportster-s-010"
                      >
                        <span className="hero-360__name">Vivid Black</span>
                        <span className="hero-360__note" />
                      </li>
                      <li
                        className="hero-360__detail"
                        aria-hidden="true"
                        data-paint-id="2022-sportster-s-f57"
                      >
                        <span className="hero-360__name">White Sand Pearl</span>
                        <span className="hero-360__note" />
                      </li>
                      <li
                        className="hero-360__detail active"
                        aria-hidden="true"
                        data-paint-id="2022-sportster-s-f59"
                      >
                        <span className="hero-360__name">
                          Mineral Green Metallic
                        </span>
                        <span className="hero-360__note" />
                      </li>
                    </ul>
                  </div>
                </div>
                <hr className="hr-category" />
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Opciones de compra"
                >
                  <Dropdown.Item href="#/action-1">
                    Prueba de manejo
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Financiamiento
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Ofertas</Dropdown.Item>
                </DropdownButton>
                <hr className="hr-category col-2" />
              <div className="selector-panel-display">
                <p className=" font-poppins text-sm ">
                  Stock disponible : {products.stock} unidades
                </p>
                {renderItemCount()}
              </div>
              </div>
            </div>
            <div className="category-info">
                <span>
                  El vehículo que se muestra puede presentar diferencias
                  visuales según el mercado y diferir de los vehículos que se
                  fabrican y entregan. La disponibilidad puede variar según el
                  mercado; consulta con tu concesionario local para conocer más
                  detalles.
                </span>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryDetail;
