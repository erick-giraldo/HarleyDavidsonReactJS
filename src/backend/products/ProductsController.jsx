import isEmpty from "is-empty";
import Swal from "sweetalert2";

import { getProducts } from "./ProductsServices";

class ProductsController {
  static getAllProducts = async ({ title, setProducts, setLoading }) => {
    try {
      setLoading(true);
      const response = await getProducts();
      if (!isEmpty(response)) {
        if (!isEmpty(title)) {
          const newTitle = title.replaceAll("-", " ");
          const result = response.filter(
            (e) => e.title.toLowerCase() === newTitle
          );
          setTimeout(() => {
            console.log('11111')
            setProducts(result);
            setLoading(false);
          }, 3000);
        } else {
          setTimeout(() => {
            console.log('22222')
            setProducts(response);
            setLoading(false);
          }, 3000);
        }
      }
      return true;
    } catch (error) {
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        title: "Oops... no se pudo obtener data",
        text: `${error}`,
      });
      setLoading(false);
      return false;
    }
  };

  static getProductById = async ({ id, setProducts, setLoading }) => {
    try {
      setLoading(true);
      const response = await getProducts();
      let data = {};
      response.forEach((element) => {
        element.data.forEach((element2) => {
          if (!isEmpty(element2) && element2.id == id) {
            return (data = element2);
          }
        });
      });
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 3000);
      return true;
    } catch (error) {
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        title: "Oops... no se pudo obtener data",
        text: `${error}`,
      });
      setLoading(false);
      return false;
    }
  };
}

export default ProductsController;
