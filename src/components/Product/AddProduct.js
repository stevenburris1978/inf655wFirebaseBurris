import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import Card from "../shared/Card";
import ProductContext from "../context/ProductContext";

import * as Yup from "yup";

export default function AddProduct() {
  
  const { addProduct, productEdit, updateProduct } = useContext(ProductContext);
  const formik = useFormik({
    initialValues: {
      category: "",
      name: "",
    },

    validationSchema: Yup.object({
      category: Yup.string()
        .max(10, "Title must be 10 characters or less")
        .required("Title is required"),
      name: Yup.string()
        .max(20, "Description must bt 20 characters or less")
        .required("Description is required"),
    }),

    onSubmit: (values) => {
      if (productEdit.edit === true) {
        updateProduct(productEdit.product.id, values);
        formik.resetForm();
        productEdit.edit = false;
      } else {
      addProduct(values);
      formik.resetForm();
    }
    },
  });

  const isButtonEdit = productEdit.edit === true ? false : true;

  useEffect(() => {
    if (productEdit.edit === true) {
      formik.setValues({
        category: productEdit.product.data.category,
        name: productEdit.product.data.name,
      });
    }
  }, 

  [productEdit.edit]);
  
  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <h2>Add a Product to your list</h2>
        <div className="inputBox">
          <div className="input_row">
            <label
              htmlFor="category"
              className={`label ${
                formik.errors.category && formik.touched.category ? "error" : ""
              }`}
            >
              {formik.errors.category ? formik.errors.category : "Category"}
            </label>
            <input
              type="text"
              className="input"
              name="category"
              placeholder="Category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="name"
              className={`label ${
                formik.errors.name && formik.touched.name
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.name
                ? formik.errors.name
                : "Name"}
            </label>
            <input
              type="text"
              className="input"

              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
        </div>
        <div>
          {isButtonEdit ? (
            <button type="submit" className="btn">
              Add Product
            </button>
          ) : (
            <button type="submit" className="btn">
              Edit Product
            </button>
          )}
        </div>
      </form>
    </Card>
  );
}