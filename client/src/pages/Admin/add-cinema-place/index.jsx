import React from "react";
import "./index.scss";
import { useFormik } from "formik";
import { doctorsSchema } from "./schema";
import axios from 'axios'
import AdminNavbar from "../../../components/Admin/navbar";

const AddCinema = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        location: "",
      },
      validationSchema: doctorsSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });


  return (
    <div id="add-doctor">
      <AdminNavbar />
      <div className="add-doctor">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form">
              <div className="right">
                <div className="input-control">
                  <p>
                    <label htmlFor="name" className="m-2">
                      Cinema name
                    </label>
                  </p>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Cinema name"
                  />
                  {errors.name && touched.name && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="location" className="m-2">
                      Cinema location
                    </label>
                  </p>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    onChange={handleChange}
                    value={values.location}
                    placeholder="Cinema location"
                  />
                  {errors.location && touched.location && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.location}
                    </div>
                  )}
                </div>

              </div>
            </div>
            <div className="btn">
              <button onClick={handleSubmit} type="submit" className="btn btn-success mt-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCinema;
