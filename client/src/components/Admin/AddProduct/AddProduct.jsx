import React from "react";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./AddProduct.scss";
import { toast, Toaster } from "react-hot-toast";

export default function AddProduct() {
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="formik">
        <div className="form">
          <Formik
            initialValues={{
              price: null,
              title: null,
              desc: null,
              color: null,
            }}
            validationSchema={Yup.object({
              price: Yup.number().required("Price is required"),
              title: Yup.string().required("Title is required"),
              desc: Yup.string().required("Description is required"),
              color: Yup.string().required("Color is required"),
            })}
            onSubmit={(values, { resetForm }) => {
              axios.post("http://localhost:8080/furnish/", values).then((res) => {
                toast.success("Added new Card");
              });
              resetForm();
            }}
          >
            {({ values, handleChange, handleSubmit, dirty }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="price">Name:</label>
                    <input
                      type="number"
                      placeholder="Price"
                      id="price"
                      value={values.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      placeholder="Title"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="desc">Images:</label>
                    <input
                      type="file"
                      placeholder="Images"
                      id="desc"
                      value={values.desc}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="color">Rating:</label>
                    <input
                      type="text"
                      placeholder="Rating"
                      id="color"
                      value={values.color}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="color">InStock:</label>
                    <input
                      type="text"
                      placeholder="InStock"
                      id="color"
                      value={values.color}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="color">Size:</label>
                    <input
                      type="text"
                      placeholder="Size"
                      id="color"
                      value={values.color}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="color">Price:</label>
                    <input
                      type="number"
                      placeholder="Price"
                      id="color"
                      value={values.color}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="color">Product Code:</label>
                    <input
                      type="text"
                      placeholder="Product Code"
                      id="color"
                      value={values.color}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" disabled={!dirty}>
                  Add
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Toaster />
    </>
  );
}
