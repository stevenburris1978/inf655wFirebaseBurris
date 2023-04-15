import React, { useState, useContext } from "react";
import SearchProducts from "./SearchProducts";
import Product from "./Product";
import ProductContext from "../context/ProductContext";

export default function Tasks() {
  const [search, setSearch] = useState("");

  const { productList } = useContext(ProductContext);

  const result = productList;

  // const result = productList.filter((product) => (
  //   product.category.toLowerCase().includes(search.toLowerCase()) ||
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // ));

  return (
    <>
      <SearchProducts search={search} setSearch={setSearch} />
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