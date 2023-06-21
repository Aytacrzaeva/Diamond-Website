import React from 'react'
import Accback from '../../../components/Site/Acc/Accback'
import Acc from '../../../components/Site/Acc/Acc'
import { Helmet } from 'react-helmet'

const Account = () => {
  return (
    <>
    <Accback/>
    <Acc/>
    <Helmet>
      <title>
        My Account
      </title>
    </Helmet>
    </>
  )
}

export default Account