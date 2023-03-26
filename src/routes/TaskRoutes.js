import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../components/Product/Product";
import SaleBox from "../components/Product/SaleBox";

export default function TaskRoutes() {
  return (
    <Routes>
      <Route index element={<Product />} />
      <Route path=":id" element={<Product />} />
      <Route path="saleBox" element={<SaleBox />} />
    </Routes>
  );
}