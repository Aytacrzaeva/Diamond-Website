import React from 'react'
import { Helmet } from 'react-helmet'
import Contactback from '../../../components/Site/ContactUs/Contactback'
import ContactUs from '../../../components/Site/ContactUs/ContactUs'

const Contact = () => {
  return (
    <>
    <Helmet>
        <title>
            Contact Page
        </title>
    </Helmet>
    <Contactback/>
    <ContactUs/>
    </>
    )
}

export default Contact