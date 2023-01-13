import { getFirestore, collection, addDoc } from "firebase/firestore";

export const createOrder = async (order) => {
  const db = getFirestore();
  const orderCollection = collection(db, "orders");
  const { id } = await addDoc(orderCollection, order);
  return id;
};
