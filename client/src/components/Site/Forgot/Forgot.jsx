import React from 'react'
import "./Forgot.scss"
import {AiFillHome} from "react-icons/ai"
import {BsArrowLeftCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'
const Forgot = () => {
  return (
    <div className="forgot">
        <div className="forgot__up">
        <div className="forgotback">
        <div className="forgotback__left">
            <div className="forgotback__left__button">
                <button>
                    <Link to="/">
                <BsArrowLeftCircle id='back'/>
                    </Link>
                Back To Home
                </button>
            </div>
           
        </div>
        <div className="forgotback__right">
            <Link to="/"><AiFillHome/></Link>
            <p>/</p>
            <p>Forgot Password</p>
            
        </div>
    </div>
        </div>
        <div className="forgot__down">
            <h2>Forgot Your Password?</h2>
            <p>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</p>
            <h4>Your E-Mail Address</h4>
            <label htmlFor="email">*E-Mail address:</label>
            <br />
            <input type="email" name='email' />
            <button>Continue</button>
        </div>
    </div>
    )
}

export default Forgot