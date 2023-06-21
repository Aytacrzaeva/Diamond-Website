import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BsArrowLeftCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'
import './Accback.scss'
const AccInfoBack = () => {
  return (
    <div className="accback">
        <div className="accback__left">
            <div className="accback__left__button">
                <button>
                    <Link to="/">
                <BsArrowLeftCircle id='back'/>
                    </Link>
                Back To Home
                </button>
            </div>
            
        </div>
        <div className="accback__right">
            <Link to="/"><AiFillHome/></Link>
            <p>/</p>
            <p>Account</p>
            
        </div>
    </div>
  )
}

export default AccInfoBack