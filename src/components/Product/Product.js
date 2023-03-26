import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Card from "../shared/Card";

export default function Product({
  id,
  image,
  category,
  name,
  price,
  handelDelete,
  checked,
  handelChecked,
}) {
  return (
    <>
      <Card>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handelChecked(id)}
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
        <button onClick={() => handelDelete(id)} className="delete">
          <FaTrashAlt />
        </button>
      </Card>
    </>
  );
}