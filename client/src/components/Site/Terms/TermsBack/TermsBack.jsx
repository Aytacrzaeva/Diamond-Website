import React from 'react'
import "./TermsBack.scss"
import { Link } from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
import {BsArrowLeftCircle} from "react-icons/bs"
const TermsBack = () => {
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
            <h2>Terms</h2>
        </div>
        <div className="back__right">
            <Link to="/"><AiFillHome/></Link>
            <p>/</p>
            <p>Terms & Conditions</p>
            
        </div>
    </div>
  )
}

export default TermsBack