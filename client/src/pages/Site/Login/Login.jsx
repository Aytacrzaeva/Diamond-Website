import React from 'react'
import { Helmet } from 'react-helmet'
import LoginPage from '../../../components/Site/Login/LoginPage'
const Login = () => {
  return (
    <>
    <Helmet>
        <title>Login</title>
    </Helmet>
    <LoginPage/>
    </>
    )
}

export default Login