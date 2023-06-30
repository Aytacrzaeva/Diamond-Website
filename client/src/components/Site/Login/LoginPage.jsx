import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './LoginPage.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir e-posta adresi girin').required('Bu alan zorunludur'),
    password: Yup.string().required('Bu alan zorunludur'),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8080/auth/login",
        values,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      if (data && data.data.isAdmin) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) {
            setLoading(false);
          } else if (password) {
            setLoading(false);
          }
        } else {
          navigate("/admin");
          setLoading(false);
        }
      } else if (data && !data.data.isAdmin) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) {
            setLoading(false);
          } else if (password) {
            setLoading(false);
          }
        } else {
          navigate("/");
          setLoading(false);
        }
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
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
    </div>
  );
};

export default LoginPage;
