import { collection, getDocs } from "firebase/firestore";
import { db } from "../screens/firebase";
let productsRef = collection(db, "products");
//HANDLE: get All Products
export let getAllProducts = async () => {
  try {
    let productsSnap = await getDocs(productsRef);
    let products = productsSnap.docs.map((product) => {
      return {
        ...product.data(),
        productID: product.id,
      };
    });
    return products;
  } catch (err) {
    return err.code;
  }
};
