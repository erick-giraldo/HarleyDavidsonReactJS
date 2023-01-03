import { useCartContext } from "../../context/CartContext";
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useState } from "react";

const Form = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const order = {
    buyer: {
      ...form,
    },
    items: cart.map((product) => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  };

  const handleSale = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => showAlert(id));
    clearCart();
    updateStock();
  };

  const updateStock = () => {
    const db = getFirestore();
    cart.forEach((e) => {
      const { id, stock, quantity } = e;
      let newStock = stock - quantity;
      const product = doc(db, "items", id);
      updateDoc(product, { stock: newStock });
    });
  };

  const showAlert = (id) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu compra ha sido generada",
      text: "Su numero de orden es " + id,
      confirmButtonColor: "#15803D",
    });
  };

  return (
    <>
      <form className="font-poppins">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-300 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-300 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-300 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono (123-456-7890)
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="addres"
              id="floating_addres"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-300 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              htmlFor="floating_addres"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Dirección
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6"></div>
        <div className="flex justify-end py-2">
          <button
            onClick={handleSale}
            type="button"
            disabled={Object.entries(form).length === 0}
            className="ml-auto px-6 py-2.5 bg-green-500 font-poppins text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Confirmar compra
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
