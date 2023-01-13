import isEmpty from "is-empty";
import Swal from "sweetalert2";

import { createOrder,updateStock } from "./CartServices";

class CartController {
  static saveOrder = async ({
    order,
    setLoading,
    clearCart,
    showAlertOrder,
    handleClose,
  }) => {
    try {
      setLoading(true);
      const response = await createOrder(order);
      if (!isEmpty(response)) {
        setTimeout(() => {
          showAlertOrder(response);
          handleClose(false);
          clearCart();
          setLoading(false);
        }, 2000);
      }
      return true;
    } catch (error) {
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        title: "Oops... no se pudo generar orden",
        text: `${error}`,
      });
      setLoading(false);
      return false;
    }
  };
}
export default CartController;
