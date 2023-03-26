import React, { useState } from "react";
import SearchProducts from "./SearchProducts";
import Product from "./Product";

export default function Tasks({ productList, handelDelete, handelChecked }) {
  const [search, setSearch] = useState("");

  const result = productList.filter((product) => (
    product.category.toLowerCase().includes(search.toLowerCase()) ||
    product.name.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <>
      <SearchProducts search={search} setSearch={setSearch} />
      {result.length ? (
        <div>
          {result.map((product) => (
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