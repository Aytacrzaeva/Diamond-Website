import React from 'react'
import { Link } from 'react-router-dom'
import "./Chanel.scss"
const Chanel = () => {
  return (
    <div className="chanel">
      <div className="chanel__header">
      <h2>Subscribe Our Chanel</h2>
      </div>
      <div className="chanel__body">
        <Link><div className="channel__img">
          <img src="https://opencart.workdo.io/diamond/image/cache/catalog/offerbanner/3-260x260.jpg" alt="" /></div></Link>
        <Link><div className="channel__img">
          <img src="https://opencart.workdo.io/diamond/image/cache/catalog/offerbanner/4-260x260.jpg" alt="" /></div></Link>
        <Link><div className="channel__img">
          <img src="https://opencart.workdo.io/diamond/image/cache/catalog/offerbanner/5-260x260.jpg" alt="" /></div></Link>
        <Link><div className="channel__img">
          <img src="https://opencart.workdo.io/diamond/image/cache/catalog/offerbanner/6-260x260.jpg" alt="" /></div></Link>
    </div>
      </div>
  )
}

export default Chanel