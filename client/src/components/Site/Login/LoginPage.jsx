import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import './LoginPage.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isEmailRegistered, setIsEmailRegistered] = useState(true);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address').required('this field is required'),
    password: Yup.string().required('this field is required'),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    axios.post('http://localhost:8080/auth/login', values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        if (res.data.isAdmin) {
          navigate('/admin');
        } else {
          navigate('/');
        }
      })
      .catch(err => {
        console.log(err);
        setIsEmailRegistered(false);
        toast.error('Wrong email or password');
      });
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
  };

  return (
    <div className="login">
      <div className="login__up">
        <div className="loginback">
          <div className="loginback__left">
            <div className="loginback__left__button">
              <button>
                <Link to="/">
                  <BsArrowLeftCircle id="back" />
                </Link>
                Back To Home
              </button>
            </div>
          </div>
          <div className="loginback__right">
            <Link to="/"><AiFillHome /></Link>
            <p>/</p>
            <p>Login</p>
          </div>
        </div>
      </div>
      <div className="login__down">
        <div className="login__down__left">
          <h3>New Customer</h3>
          <p>Register Account</p>
          <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
          <button><Link to="/register">Continue</Link></button>
        </div>
        <div className="login__down__right">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="myForm">
              <div>
                <label htmlFor="email">E-mail Address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail Address"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <p className='forgott'><Link to="/forgotpassword">Forgotten Password</Link></p>
              <div>
                <button type="submit" disabled={loading}>
                  {loading ? 'Loading...' : 'Login'}
                </button>
              </div>
            </Form>
          </Formik>
         
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} /> {/* Add the Toaster component */}
    </div>
  );
};

export default LoginPage;
