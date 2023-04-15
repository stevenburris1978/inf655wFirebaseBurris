import React, { useContext } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import ProductContext from "../context/ProductContext";

export default function Product({
  id,
  image,
  category,
  name,
  price,
  product,
  checked,

}) {
  const { checkProduct, deleteProduct, editProduct } = useContext(ProductContext);
  return (
    <>
      <Card>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checkProduct(id)}
        />

        <div
          className="image"

        >
          {image}
        </div>

        <div
          className="text-display"
          style={checked ? { textDecoration: "line-through" } : null}
        >
          {category}
        </div>
        <div
          className="text-display"
          style={checked ? { textDecoration: "line-through" } : null}
        >
          {name}
        </div>
        <div
          className="text-display"
          style={checked ? { textDecoration: "line-through" } : null}
        >
          {price}
        </div>
        <button onClick={() => editProduct(product)} className="edit">
          <FaEdit />
        </button>
        <button onClick={() => deleteProduct(id)} className="delete">
          <FaTrashAlt />
        </button>
      </Card>
    </>
  );
}