import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './RegisterPage.scss';

const RegisterPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      await axios.post("http://localhost:8080/auth/register", values);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="register__up">
        <div className="registerback">
          <div className="registerback__left">
            <div className="registerback__left__button">
              <button>
                <Link to="/">
                  <BsArrowLeftCircle id="back" />
                </Link>
                Back To Home
              </button>
            </div>
          </div>
          <div className="registerback__right">
            <Link to="/"><AiFillHome /></Link>
            <p>/</p>
            <p>Register</p>
          </div>
        </div>
      </div>
      <div className="register__down">
        <div className='form'>
          <h2>Your Personal Details</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <label htmlFor="firstname">*First Name:</label>
                <Field type="text" id="firstname" name="firstname" />
                <ErrorMessage name="firstname" component="div" />
              </div>
              <div>
                <label htmlFor="lastname">*Last Name:</label>
                <Field type="text" id="lastname" name="lastname" />
                <ErrorMessage name="lastname" component="div" />
              </div>
              <div>
                <label htmlFor="email">*Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <h2>Your Password</h2>
                <label htmlFor="password">*Password:</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
