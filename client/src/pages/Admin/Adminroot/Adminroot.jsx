import React from 'react'
import Header from '../../../layout/Admin/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../../layout/Admin/Footer'

const Adminroot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default Adminroot