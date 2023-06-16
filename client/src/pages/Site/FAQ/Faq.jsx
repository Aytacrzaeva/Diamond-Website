import React from 'react'
import FAQ from '../../../components/Site/FAQ/FAQ'
import { Helmet } from 'react-helmet'

const Faq = () => {
  return (
    <>
    <Helmet>
        <title>
            FAQ
        </title>
    </Helmet>
    <FAQ/>
    </>
    )
}

export default Faq