import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "../context/ProductContext";

export default function Products() {

  const { productList } = useContext(ProductContext);
  const result = productList;

  return (
    <>
      {result.length ? (
        <div>
          {result.map((product) => (
            <Product
              key={product.data.id}
              id={product.id}
              image={product.data.image}
              category={product.data.category}
              name={product.data.name}
              price={product.data.price}
              checked={product.data.checked}
              product={product}
            />
          ))}
        </div>
      ) : (
        <p>Product List is empty</p>
      )}
    </>
  );
}