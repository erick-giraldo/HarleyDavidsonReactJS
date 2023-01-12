import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";

export const createOrder = async (order) => {
  const db = getFirestore()
  const orderCollection = collection(db, 'orders')
  const {id} = await addDoc( orderCollection, order)
   updateStock(order);
  return id;
};

const updateStock = (order) => {
  const db = getFirestore();
  order.forEach((e) => {
  console.log("🚀 ~ file: CartServices.jsx:20 ~ order.forEach ~ e", e)
    
    // const { id, stock, quantity } = e;
    // let newStock = stock - quantity;
    // const product = doc(db, "items", id);
    // updateDoc(product, { stock: newStock });
  });
};
