import React, { useState, useContext, useEffect } from "react";
import isEmpty from "is-empty";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getDataCart = () => {
    const itemsCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!isEmpty(itemsCart) || []) {
      setCart(itemsCart);
    }
  };

  useEffect(() => {
    getDataCart();
  }, []);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.map((product) => {
            return product.id === item.id
              ? { ...product, quantity: product.quantity + quantity }
              : product;
          })
        )
      );
      getDataCart();
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity }])
      );
      getDataCart();
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (id) => cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) => {
    const items = JSON.parse(localStorage.getItem("cart"));
    const productFilter = items.filter((product) => product.id != id);
    localStorage.setItem("cart", JSON.stringify(productFilter));
    getDataCart();
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  // const totalProducts =  !isEmpty(cart) || [] ? cart.length : '0'
  const totalProducts = () =>
    !isEmpty(cart) || []
      ? cart.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.quantity,
          0
        )
      : 0;

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
