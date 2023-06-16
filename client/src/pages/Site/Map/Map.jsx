import React from 'react'
import { Helmet } from 'react-helmet'
import MapComponent from '../../../components/Site/MapComponent/MapComponent'
import MapBack from '../../../components/Site/MapComponent/MapBack'

const Map = () => {
  return (
    <>
    <Helmet>
        <title>
            Adress Map
        </title>
    </Helmet>
    <MapBack/>
    <MapComponent/>
    </>
  )
}

export default Map