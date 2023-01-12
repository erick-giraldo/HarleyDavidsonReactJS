import React from "react";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from "@mui/material/Stack";

const CartItems = (props) => {
  const {handleOpen} = props;
  const {removeProduct, cart, totalPrice, clearCart } = useCartContext();


  return (
    <Stack direction="row" spacing={2}>
      <Button
        className="btn-clear-cart"
        variant="outlined"
        onClick={() => clearCart()}
        startIcon={<DeleteIcon />}
      >
        Vaciar Carrito
      </Button>
      <Button
        className="btn-shop-cart"
        variant="contained"
        onClick={handleOpen}
        endIcon={<SendIcon />}
      >
        confirmar compra
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Detalle
              </TableCell>
              <TableCell align="center" colSpan={2}>Precio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Acción</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio Unit</TableCell>
              <TableCell align="right">Sub Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow key={row.desc}>
                <TableCell className="td-action">
                <Button
                onClick={()=>(removeProduct(row.id))}
               ><DeleteForeverIcon  className="delete-item"/> </Button>
                </TableCell>
                <TableCell>
                  <NavLink to={`/item/${row.id}`}> 
                  <img src={row.image} alt="product" width="150px" />
                  </NavLink>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity * row.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} />
              <TableCell className="total-cart" colSpan={2}>
                Total
              </TableCell>
              <TableCell className="total-cart-text" align="right">
                {totalPrice()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default CartItems;
