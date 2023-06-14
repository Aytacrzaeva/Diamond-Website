import React from 'react'
import Back from '../../../components/Site/About/Back/Back'
import { Helmet } from 'react-helmet'
import AboutUs from '../../../components/Site/About/AboutUs/AboutUs'

const About = () => {
  return (
    <>
    <Helmet>
        <title>
            About Us
        </title>
    </Helmet>
    <Back/>
    <AboutUs/>
    </>
  )
}

export default About