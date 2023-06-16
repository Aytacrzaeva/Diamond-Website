import React from 'react'
import { Helmet } from 'react-helmet'
import TermsBack from '../../../components/Site/Terms/TermsBack/TermsBack'
import Conditions from '../../../components/Site/Terms/TermsBody/Conditions'

const Terms = () => {
  return (
    <>
    <Helmet>
        <title>
            Terms & Conditions
        </title>
    </Helmet>
    <TermsBack/>
    <Conditions/>
    </>
  )
}

export default Terms