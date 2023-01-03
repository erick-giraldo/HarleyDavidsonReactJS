import { getFirestore, collection, getDocs } from "firebase/firestore";
import isEmpty from "is-empty";

export const getUsers = async () => {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, "users");
  const data = await getDocs(queryCollection);
  if (isEmpty(data.docs)) {
    throw new Error(`HTTP error! status: nose puede acceder a la Data`);
  }
  return data.docs.map((d) => ({ id: d.id, ...d.data() }));
};
