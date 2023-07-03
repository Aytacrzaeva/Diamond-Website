import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Checkout.scss';
import axios from 'axios';

const Checkout = () => {
  const [user,setUser] = useState({})
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/getMe', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const userData = response.data;
        console.log(userData)
        setUser(userData)
      } catch (error) {
        console.warn(error);
      }
    };

    fetchUserData();
  }, [token]);
  // Yup şema validasyonu
  const checkoutSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    address: Yup.string(),
    postCode: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    region: Yup.string(),
    paymentMethod: Yup.string(),
  });

  const handleSubmit = (values) => {
    const postData={user:user,products:JSON.parse(localStorage.getItem("basketItems")),paymentMethod:values.paymentMethod,comment:values.comment}
    console.log(postData);
    axios.post("http://localhost:8080/orders", postData).then((res)=>{
      console.log(res.data)
    })
  };

  return (
    <Formik
      initialValues={{
        paymentMethod: '',
        comment: '',
        products:JSON.parse(localStorage.getItem("basketItems"))
      }}
      validationSchema={checkoutSchema}
      onSubmit={handleSubmit}
    >
      <Form className="checkout-form" >
        <div className="shipping-address">
          <h2>Shipping Address</h2>
          <div>
            <label htmlFor="firstName">*First Name</label>
            <Field type="text" id="firstName" name="firstName" value={user.firstname} />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="lastName">*Last Name</label>
            <Field type="text" id="lastName" name="lastName" value={user.lastname}/>
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="address">*Address</label>
            <Field type="text" id="address" name="address" value={user.address} />
            <ErrorMessage name="address" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="postCode">*Post Code</label>
            <Field type="text" id="postCode" name="postCode" value={user.postcode}/>
            <ErrorMessage name="postCode" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="city">*City</label>
            <Field type="text" id="city" name="city" value={user.city}/>
            <ErrorMessage name="city" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="country">*Country</label>
            <Field type="text" id="country" name="country" value={user.country}/>
            <ErrorMessage name="country" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="region">*Region</label>
            <Field type="text" id="region" name="region" value={user.region}/>
            <ErrorMessage name="region" component="div" className="error-message" />
          </div>

          <button type="submit">Continue</button>
        </div>

        <div className="shipping">
          <h2>Shipping</h2>
          <div>
            <label htmlFor="paymentMethod">*Payment Methods</label>
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
