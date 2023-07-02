import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./AddProduct.scss";
import { toast, Toaster } from "react-hot-toast";

export default function AddProduct() {
  const mainInputRef = useRef();
  const hoverInputRef = useRef();

  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="formik">
        <div className="form">
          <Formik
            initialValues={{
              name: "",
              main: null,
              mainSrc:"",
              rating: "",
              instock: false,
              size: "",
              price: "",
              productcode: "",
              hover:null,
              hoverSrc:""

            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              main: Yup.mixed().required("Images are required"),
              hover:Yup.mixed().required("images are required"),
              rating: Yup.string().required("Rating is required"),
              instock: Yup.boolean().required("InStock is required"),
              size: Yup.string().required("Size is required"),
              price: Yup.number().required("Price is required"),
              productcode: Yup.string().required("Product Code is required"),
            })}
            onSubmit={(values, { resetForm }) => {
              console.log(values)
                axios.post("http://localhost:8080/products", values)

                .then((res) => {
                  toast.success("Added new Card");
                })
                .catch((error) => {
                  toast.error("Error adding new Card");
                });
              resetForm();
            }}
          >
            {({ values, setFieldValue, handleChange, handleSubmit, dirty }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      value={values.name}
                      onChange={handleChange("name")}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="main">Images:</label>
                    <input
                      type="file"
                      placeholder="main"
                      id="main"
                      name="main"
                      ref={mainInputRef}
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                          setFieldValue("main", file);
                          setFieldValue("mainSrc",file.name)
                        } else {
                          setFieldValue("main", null);
                        }
                      }}
                      style={{display:"none"}}
                    />
                    <button
                      type="button"
                      onClick={() => mainInputRef.current.click()}
                    >
                      Select File
                    </button>
                  </div>

                  <div className="form-field">
                    <label htmlFor="hover">Hover image:</label>
                    <input
                      type="file"
                      placeholder="Hover"
                      id="hover"
                      name="hover"
                      ref={hoverInputRef}
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                          setFieldValue("hover", file);
                          setFieldValue("hoverSrc",file.name)
                        } else {
                          setFieldValue("hover", null);
                        }
                      }}
                      style={{display:"none"}}
                    />
                    <button
                      type="button"
                      onClick={() => hoverInputRef.current.click()}
                    >
                      Select File
                    </button>
                  </div>

                  <div className="form-field">
                    <label htmlFor="rating">Rating:</label>
                    <input
                      type="text"
                      placeholder="Rating"
                      id="rating"
                      value={values.rating}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="instock">InStock:</label>
                    <input
                      type="checkbox"
                      id="instock"
                      checked={values.instock}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="size">Size:</label>
                    <input
                      type="text"
                      placeholder="Size"
                      id="size"
                      value={values.size}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="price">Price:</label>
                    <input
                      type="number"
                      placeholder="Price"
                      id="price"
                      value={values.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="productcode">Product Code:</label>
                    <input
                      type="text"
                      placeholder="Product Code"
                      id="productcode"
                      value={values.productcode}
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


