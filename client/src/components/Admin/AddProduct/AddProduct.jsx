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
                            name: "",
                            images: [],
                            rating: "",
                            instock: false,
                            size: "",
                            price: "",
                            productcode: "",
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required("Name is required"),
                            images: Yup.mixed().required("Images are required"),
                            rating: Yup.string().required("Rating is required"),
                            instock: Yup.boolean().required("InStock is required"),
                            size: Yup.string().required("Size is required"),
                            price: Yup.number().required("Price is required"),
                            productcode: Yup.string().required("Product Code is required"),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            axios
                                .post("http://localhost:8080/products/", values)
                                .then((res) => {
                                    toast.success("Added new Card");
                                })
                                .catch((error) => {
                                    toast.error("Error adding new Card");
                                });
                            resetForm();
                        }}
                    >
                        {({ values, handleChange, handleSubmit, dirty }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-field">
                                        <label htmlFor="name">Name:</label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            id="name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="file">Images:</label>
                                        <input
                                            type="file"
                                            placeholder="Images"
                                            id="file"
                                            onChange={(event) => {
                                                handleChange({
                                                    target: {
                                                        id: "images",
                                                        value: event.target.files[0],
                                                    },
                                                });
                                            }}
                                        />
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
