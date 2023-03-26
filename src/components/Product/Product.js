import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Card from "../shared/Card";

export default function Product({
  id,
  category,
  name,
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
        <button onClick={() => handelDelete(id)} className="delete">
          <FaTrashAlt />
        </button>
      </Card>
    </>
  );
}