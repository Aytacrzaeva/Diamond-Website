import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BsArrowLeftCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'
import "./Contactback.scss"
const Contactback = () => {
  return (
    <div className="contactback">
        <div className="contactback__left">
            <div className="contactback__left__button">
                <button>
                    <Link to="/">
                <BsArrowLeftCircle id='back'/>
                    </Link>
                Back To Home
                </button>
            </div>
            <h2>Contact Us</h2>
                    <p>Have any questions or need assistance? Feel free to reach out to our friendly team. We're here to provide prompt support and answer all your inquiries.</p>
                    </div>
        <div className="contactback__right">
            <Link to="/"><AiFillHome/></Link>
            <p>/</p>
            <p>Contact Us</p>
            
        </div>
    </div>
    )
}

export default Contactback