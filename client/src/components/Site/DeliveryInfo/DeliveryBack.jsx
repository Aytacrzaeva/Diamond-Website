import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BsArrowLeftCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'
const DeliveryBack = () => {
  return (
    <div className="back">
        <div className="back__left">
            <div className="back__left__button">
                <button>
                    <Link to="/">
                <BsArrowLeftCircle id='back'/>
                    </Link>
                Back To Home
                </button>
            </div>
            <h2>Delivery Information</h2>
        </div>
        <div className="back__right">
            <Link to="/"><AiFillHome/></Link>
            <p>/</p>
            <p>Delivery Information</p>
            
        </div>
    </div>
  )
}

export default DeliveryBack