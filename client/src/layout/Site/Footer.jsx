import React from 'react'
import './Footer.scss'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__inp">
          <div className="footer__inp__text">
            <h2>Subscribe Newsletter </h2>
            <h2>And Get -20% Off</h2>
          </div>
          <div className="footer__inp__input">
            <input type="text" name="" id="" placeholder='Type your address email...' />
            <button><BsFillArrowRightCircleFill /></button>
          </div>


        </div>
        <div className="footer__company">
          <div className="footer__company__items">
            <h2>SHOP</h2>
            <Link to="/faq"><p>FAQ</p></Link>
            <Link to="/terms&conditions"><p>Terms & Conditions</p></Link>
            <Link to="/delivery"><p>Delivery Information</p></Link>
            <Link to="/about"><p>About Us</p></Link>
            <Link to="/privacy"><p>Privacy Policy</p></Link>
            <Link to="/blogs"><p>Blogs</p></Link>
            
          </div>
        </div>
        <div className="footer__about">
          <div className="foot__about__items">
            <h2>ACCOUNT</h2>
            <Link to="/login"><p>Account</p></Link>
            <Link to="/login"><p>Order History</p></Link>
            <Link to="/wishlist"><p>Wish List</p></Link>
            <p>NewsLetter</p>
            <p>Specials</p>
            <Link to="/contact"><p>Contact Us</p></Link>
          </div>
        </div>
        <div className="footer__share">
          <div className="footer__share__item">
            <h1>Diamonds</h1>
            <h5>SHARE</h5>
            <div className="footer__share__icons">
              <div className="icon"><GrFacebookOption /></div>
              <div className="icon"><AiOutlineTwitter /></div>
              <div className="icon"><AiFillLinkedin /></div>
              <div className="icon"><FiInstagram /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer