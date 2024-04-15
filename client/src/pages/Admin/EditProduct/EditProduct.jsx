import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './EditProduct.scss';
import { toast, Toaster } from 'react-hot-toast';

const EditProduct = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(match.params.id);
  }, [match.params.id]);

  const fetchProduct = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log('Axios error:', error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(`http://localhost:8080/products/${product._id}`, values);
      if (response.status === 200) {
        toast.success('Product has been updated successfully!');
      } else {
        console.log('HTTP error:', response.status);
      }
    } catch (error) {
      console.log('Axios error:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <div className="formik">
        <div className="form">
          <Formik
            initialValues={{
              name: product.name,
              main: null,
              mainSrc: '',
              rating: product.rating,
              instock: product.inStock,
              size: product.size,
              price: product.price,
              productcode: product.productcode,
              hover: null,
              hoverSrc: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Name is required'),
              main: Yup.mixed(),
              hover: Yup.mixed(),
              rating: Yup.string().required('Rating is required'),
              instock: Yup.boolean().required('InStock is required'),
              size: Yup.string().required('Size is required'),
              price: Yup.number().required('Price is required'),
              productcode: Yup.string().required('Product Code is required'),
            })}
            onSubmit={(values) => handleSubmit(values)}
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
                      onChange={handleChange('name')}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="main">Images:</label>
                    <input
                      type="file"
                      placeholder="main"
                      id="main"
                      name="main"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                          setFieldValue('main', file);
                          setFieldValue('mainSrc', file.name);
                        } else {
                          setFieldValue('main', null);
                        }
                      }}
                      style={{ display: 'none' }}
                    />
                    <button type="button" onClick={() => document.getElementById('main').click()}>
                      Select File
                    </button>
                    {values.mainSrc && <span>{values.mainSrc}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="hover">Hover image:</label>
                    <input
                      type="file"
                      placeholder="Hover"
                      id="hover"
                      name="hover"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                          setFieldValue('hover', file);
                          setFieldValue('hoverSrc', file.name);
                        } else {
                          setFieldValue('hover', null);
                        }
                      }}
                      style={{ display: 'none' }}
                    />
                    <button type="button" onClick={() => document.getElementById('hover').click()}>
                      Select File
                    </button>
                    {values.hoverSrc && <span>{values.hoverSrc}</span>}
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
                  Save
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default EditProduct;
