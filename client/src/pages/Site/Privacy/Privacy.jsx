import React from 'react'
import { Helmet } from 'react-helmet'
import PrivactPolicyBack from '../../../components/Site/PrivacyPolicy/PrivactPolicyBack'
import PrivacyPolicy from '../../../components/Site/PrivacyPolicy/PrivacyPolicy'

const Privacy = () => {
  return (
   <>
    <Helmet>
        <title>
            Privacy Policy
        </title>
    </Helmet>
    <PrivactPolicyBack/>
    <PrivacyPolicy/>
   </>
  )
}

export default Privacy