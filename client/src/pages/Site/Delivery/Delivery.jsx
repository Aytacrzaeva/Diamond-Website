import React from 'react'
import { Helmet } from 'react-helmet'
import DeliveryBack from '../../../components/Site/DeliveryInfo/DeliveryBack'
import DeliveryInfo from '../../../components/Site/DeliveryInfo/DeliveryInfo'

const Delivery = () => {
  return (
    <>
    <Helmet>
        <title>
            Delivery Information
        </title>
    </Helmet>
    <DeliveryBack/>
    <DeliveryInfo/>
    </>
  )
}

export default Delivery