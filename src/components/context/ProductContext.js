import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
// fetchProduct

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [productEdit, setProductEdit] = useState({
    product: {},
    edit: false,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productListRef = collection(db, "productList");
        const q = query(productListRef, orderBy("category"), limit(10));
        const querySnapshot = await getDocs(q);
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setProductList(productList);
      } catch (error) {
        console.error("Error Fetching Product List", error);
      }
    };
    fetchProduct();
  }, []);

  //Add the product
  const addProduct = (newProduct) => {
    newProduct.id = uuidv4();
    newProduct.checked = false;
    try {
      const docRef = addDoc(collection(db, "productList"), newProduct);
      console.log("Document written: ", docRef.id);
      setProductList((preProductList) => [
        ...preProductList,
        { id: docRef.id, data: newProduct },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  //Update product
  const updateProduct = (id, updProduct) => {
    const docRef = doc(db, "productList", id);
    console.log(id, updProduct);
    updateDoc(docRef, updProduct);
    setProductList((preProductList) => [
      ...preProductList,
      { id: docRef.id, data: updProduct },
    ]);
  };

      //Delete the product

    const deleteProduct = async (id) => {
      if (window.confirm("Confirm delete!")) {
        try{
        const docRef = doc(db, "productList", id);
        await deleteDoc(docRef);
        setProductList(productList.filter((product) => product.id !== id));
        } catch (error) {
        console.error("error when trying delete product", error);
        }
      }
    };

    //To edit the Product
  const editProduct = (product) => {
    setProductEdit({ product, edit: true });
  };

  //Checked!
  const checkProduct = (id) => {
    setProductList(
      productList.map((product) =>
        product.data.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        deleteProduct,
        checkProduct,
        addProduct,
        editProduct,
        updateProduct,
        productEdit,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;