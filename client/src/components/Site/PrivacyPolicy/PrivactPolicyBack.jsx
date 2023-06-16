import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BsArrowLeftCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'
const PrivactPolicyBack = () => {
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
            <h2>Privacy & Policy</h2>
            <p>support 24/7</p>
        </div>
        <div className="back__right">
            <Link to="/"><AiFillHome/></Link>
            <p>/</p>
            <p>Privacy & Policy</p>
            
        </div>
    </div>
  )
}

export default PrivactPolicyBack