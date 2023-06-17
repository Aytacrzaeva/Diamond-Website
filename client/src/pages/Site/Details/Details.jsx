import React from 'react'
import { Helmet } from 'react-helmet'
import {AiFillHome} from "react-icons/ai"
import {BsArrowLeftCircle} from "react-icons/bs"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {FaRegHeart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./Details.scss"
import Ring1 from '../../../images/products/1/1-1000x1000.png'
import Ring1__2 from '../../../images/products/1/2-1000x1000.png'
const Details = () => {
  return (
    <>
    <Helmet>
        <title>Product Detail</title>
    </Helmet>
    <div className="detail">
      <div className="detail__left">
        <img src={Ring1} alt="" />
      </div>
      <div className="detail__right">
      <div className="detailback">
        <div className="detailback__left">
            <div className="detailback__left__button">
                <button>
                    <Link to="/products">
                <BsArrowLeftCircle id='back'/>
                    </Link>
                    Back to All Products
                </button>
            </div>
            
        </div>
        <div className="detailback__right">
            <Link to="/"><AiFillHome/></Link>
            <p>/</p>
            <p>Detail</p>
            
        </div>
    </div>
    <div className="detail__left__header">
      <h2>Abigail Moon & Stars Ring</h2>
      <button><FaRegHeart/></button>
    </div>
    <div className="detail__left__body">
      <p>Product Code:</p><p>Products 1</p>
    </div>
    <div className="detail__left__size">
      <p>*Size</p>
      <span>17</span>
      <span>18</span>
    </div>
    <div className="detail__left__counter">
      <span>-</span><p>0</p><span>+</span>
    </div>
    <div className="detail__left__price">
      <p>250$</p>
    </div>
    <div className="detail__left__button">
      <button>Add to Cart <HiOutlineShoppingBag/></button>
    </div>
      </div>
    </div>
    
   
    </>
  )
}

export default Details