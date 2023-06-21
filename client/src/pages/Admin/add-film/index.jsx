import React from "react";
import AdminNavbar from "../../../components/Admin/navbar/index";
import "./index.scss";
import { useFormik } from "formik";
import { doctorsSchema } from "./schema";

const AddFilm = () => {
  

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        title: "",
        director: "",
        releaseYear: null,
        cinemaPlaces: [],
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
                    <label htmlFor="title" className="m-2">
                      Film title
                    </label>
                  </p>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Film title"
                  />
                  {errors.title && touched.title && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.title}
                    </div>
                  )}
                </div>

                <div className="input-control">
                  <p>
                    <label htmlFor="director" className="m-2">
                      Film Director
                    </label>
                  </p>
                  <input
                    id="director"
                    name="director"
                    type="text"
                    onChange={handleChange}
                    value={values.director}
                    placeholder="Film director"
                  />
                  {errors.director && touched.director && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.director}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="releaseYear" className="m-2">
                      Release year
                    </label>
                  </p>
                  <input
                    id="releaseYear"
                    name="releaseYear"
                    type="number"
                    onChange={handleChange}
                    value={values.releaseYear}
                    placeholder="Release year"
                  />
                  {errors.releaseYear && touched.releaseYear && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.releaseYear}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFilm;
