import { useState } from "react";
import Tasks from "../components/Product/Tasks";
import ProductData from "../components/Product/ProductData";


export default function SearchPage() {
  const [productList, setProductList] = useState(ProductData);

  const deleteTask = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  const checkTask = (id) => {
    setProductList(
      productList.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  return (
    <div className="container">
      <Tasks
        productList={productList}
        handelDelete={deleteTask}
        handelChecked={checkTask}
      />
    </div>
  );
}