import React from 'react'
import "./Section1.scss"
import Section1_img from "../../../images/sections/Section1.png"
import {RiShoppingBagLine} from "react-icons/ri"
const Section1 = () => {
  return (
    <div className="section1">
        <div className="section1__left">
        <h1>Jewelry & diamonds</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          <button>Check More Products <RiShoppingBagLine /></button>
        </div>
        <div className="section1__right">
            <img src={Section1_img} alt="" />
        </div>
    </div>
    )
}

export default Section1