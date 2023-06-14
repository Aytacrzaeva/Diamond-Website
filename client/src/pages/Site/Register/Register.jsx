import React from 'react'
import { Helmet } from 'react-helmet'
import RegisterPage from '../../../components/Site/RegisterPage/RegisterPage'

const Register = () => {
  return (
    <>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <RegisterPage/>
    </>
    )
}

export default Register