import React from 'react'
import Header from '../../../layout/Site/Header'
import Footer from '../../../layout/Site/Footer'
import { Outlet } from 'react-router-dom'
import Header2 from '../../../layout/Site/Header2'

const Siteroot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Header2/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default Siteroot