import React from 'react'
import './Footer.scss'
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {FiInstagram} from 'react-icons/fi';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__crypto">
          <div className="footer__crypto__text">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
          </div>
          <div className="footer__crypto__icons">
          <div className="icon"><GrFacebookOption /></div>
          <div className="icon"><AiOutlineTwitter/></div>
          <div className="icon"><AiFillLinkedin/></div>
          <div className="icon"><FiInstagram/></div>
          </div>
          
        </div>
        <div className="footer__company">
          <div className="footer__company__items">
          <h2>Company</h2>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Team</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="footer__about">
          <div className="foot__about__items">
            <h2>About</h2>
            <p>Documentation</p>
            <p>ios & Android Apps</p>
            <p>Privacy Policy</p>
            <p>Support Forum</p>
            <p>Terms Conditions</p>
          </div>
        </div>
        <div className="footer__resource">
          <div className="footer__resource__item">
            <h2>Resource</h2>
              <p>Company No: C5B345 CSINE GROUP LTD.</p>
              <p>Address: M-321 Volunt Ave, Staten Islandm, NY 201526</p>
          </div>
        </div>
      </div>
      <div className="footer__down">
        <p>Designed and Developed By UIdeck</p>
      </div>
    </div>
  )
}

export default Footer