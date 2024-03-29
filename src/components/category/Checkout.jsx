import React, { useState } from "react";
import ModalCheckOut from "./ModalCheckOut";
import CartController from "../../backend/products/CartController";
import { useCartContext } from "../../context/CartContext";
import isEmpty from "is-empty";

const Checkout = (props) => {
  const { open, handleClose, setLoading, showAlertOrder } = props;
  const [pago, setPago] = useState("");
  const [inputs, setInputs] = useState({});
  const { cart, totalPrice, clearCart } = useCartContext();

  const handleChange = (event) => {
    setPago(event.target.value);
  };

  const handleInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const validateEmails = (email1, email2) => {
    if (
      !isEmpty(email1) &&
      !isEmpty(email2) &&
      email1.toLowerCase() === email2.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  };

  const order = {
    date: new Date().toLocaleString(),
    buyer: { ...inputs },
    items: cart.map((product) => ({
      id: product.id,
      image: product.image,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      stock: product.stock,
    })),
    total: totalPrice(),
    paymetod: pago,
    state: "generada",
  };

  const handleSaveOrder = () => {
    CartController.saveOrder({
      order,
      setLoading,
      clearCart,
      showAlertOrder,
      handleClose,
    });
  };

  return (
    <ModalCheckOut
      open={open}
      handleClose={handleClose}
      handleChange={handleChange}
      handleInputs={handleInputs}
      pago={pago}
      inputs={inputs}
      handleSaveOrder={handleSaveOrder}
      validateEmails={validateEmails}
    />
  );
};

export default Checkout;
