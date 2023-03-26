import React from "react";
import Product from "./Product";

export default function Products({ productList, handelDelete, handelChecked }) {

  return (
    <>
      {productList.length ? (
        <div>
          {productList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              category={product.category}
              name={product.name}
              price={product.price}
              handelDelete={handelDelete}
              checked={product.checked}
              handelChecked={handelChecked}
            />
          ))}
        </div>
      ) : (
        <p>Product List is empty</p>
      )}
    </>
  );
}