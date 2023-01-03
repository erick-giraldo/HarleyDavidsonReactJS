import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CartItems from "./CartItems";
const Cart = () => {
  const { cart} = useCartContext();

  if (cart.length === 0) {
    return (
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

  return (
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
      <CartItems />
      </div>
    </main>
  );
};
export default Cart;
