import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Checkout.scss';

const Checkout = () => {
  // Yup şema validasyonu
  const checkoutSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address: Yup.string().required('Address is required'),
    postCode: Yup.string().required('Post Code is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    region: Yup.string().required('Region is required'),
    paymentMethod: Yup.string().required('Please select a payment method'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        postCode: '',
        city: '',
        country: '',
        region: '',
        paymentMethod: '',
        comment: '',
      }}
      validationSchema={checkoutSchema}
      onSubmit={handleSubmit}
    >
      <Form className="checkout-form">
        <div className="shipping-address">
          <h2>Shipping Address</h2>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="postCode">Post Code</label>
            <Field type="text" id="postCode" name="postCode" />
            <ErrorMessage name="postCode" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <Field type="text" id="city" name="city" />
            <ErrorMessage name="city" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <Field type="text" id="country" name="country" />
            <ErrorMessage name="country" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="region">Region</label>
            <Field type="text" id="region" name="region" />
            <ErrorMessage name="region" component="div" className="error-message" />
          </div>

          <button type="submit">Continue</button>
        </div>

        <div className="shipping">
          <h2>Shipping</h2>
          <div>
            <label htmlFor="paymentMethod">Payment Methods</label>
            <Field as="select" id="paymentMethod" name="paymentMethod">
              <option value="">Select a payment method</option>
              <option value="cash">Cash</option>
              <option value="payment">Payment</option>
            </Field>
            <ErrorMessage name="paymentMethod" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="comment">Add Comment</label>
            <Field type="text" id="comment" name="comment" />
            <ErrorMessage name="comment" component="div" className="error-message" />
          </div>

          <button type="submit">Confirm Order</button>
        </div>
      </Form>
    </Formik>
  );
};

export default Checkout;
