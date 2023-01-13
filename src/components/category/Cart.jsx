import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <main className="col-lg-10 col-md-12 col-sm-12 main-container car-empty">
        <div className="referencia">
          <nav aria-label="breadcrumb">
            <ol className="descolgado breadcrumb">
              <li className="breadcrumb-item">
                <li className="breadcrumb-item">
                  <Link to="/category">Productos</Link>
                </li>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Carrito de Compras
              </li>
            </ol>
          </nav>
        </div>
        <div className="row nosotros-contenido">
          <div className="cart-empty">
            <p>No hay articulos en el carrito :(</p>
            <Link to="/category">
              <Button variant="contained" endIcon={<Inventory2Icon />}>
                Ver todos los articulos
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const showAlertOrder = (id) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu compra ha sido generada",
      text: "Su numero de orden es " + id,
      confirmButtonColor: "#15803D",
    }).then(() => {
      window.location.href = "/category";
    });
  };

  return loading ? (
    <Loading />
  ) : (
    <main className="col-lg-10 col-md-12 col-sm-12 main-container">
      <div className="referencia">
        <nav aria-label="breadcrumb">
          <ol className="descolgado breadcrumb">
            <li className="breadcrumb-item">
              <li className="breadcrumb-item">
                <Link to="/category">Productos</Link>
              </li>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Carrito de Compras
            </li>
          </ol>
        </nav>
      </div>
      <div className="row nosotros-contenido">
        <CartItems handleOpen={handleOpen} />
      </div>
      <Checkout
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        setLoading={setLoading}
        showAlertOrder={showAlertOrder}
      />
    </main>
  );
};
export default Cart;
