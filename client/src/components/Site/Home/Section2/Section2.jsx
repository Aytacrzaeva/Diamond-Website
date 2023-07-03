import React from 'react'
import "./Section2.scss"
import Section2_img from "../../../../images/sections/Section2.png"
import {RiShoppingBagLine} from "react-icons/ri"
import { Link } from 'react-router-dom'
const Section2 = () => {
  return (
    <div className="section2">
        <div className="section2__left">
        <h1>Jewelry & diamonds</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          <Link to='/products'>
          <button>Check More Products <RiShoppingBagLine /></button>
          </Link>
        </div>
        <div className="section2__right">
            <img src={Section2_img} alt="" />
        </div>
    </div>
    )
}

export default Section2