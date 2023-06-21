import React from 'react'
import { RxPerson } from 'react-icons/rx'
import {SlLock} from 'react-icons/sl'
import {CiBoxes} from 'react-icons/ci'
import {TbTruckReturn} from 'react-icons/tb'
import {BsPersonFill} from 'react-icons/bs'
import {TfiPencilAlt} from 'react-icons/tfi'
import {RiFolderUserFill} from 'react-icons/ri'
import {AiOutlinePoweroff} from 'react-icons/ai'
import "./Acc.scss"
import { Link } from 'react-router-dom'
const Acc = () => {
    return (
        <div className="acc">
            <div className="acc__left">
                <div className="acc__left__top">
                    <h2>My Account</h2>
                    <div className="acc__left__top__cards">
                        <div className="acc__left__top__cards__card">
                            <div className="acc__left__top__cards__card__left">
                                <RxPerson />
                            </div>
                            <div className="acc__left__top__cards__card__right">
                               <Link to="/myprofile"><h6>Edit Your Account Information</h6></Link>
                                <p>Edit Your Account</p>
                            </div>
                        </div>
                        <div className="acc__left__top__cards__card">
                            <div className="acc__left__top__cards__card__left">
                                <SlLock />
                            </div>
                            <div className="acc__left__top__card__right">
                                <h6>Change Your Password</h6>
                                <p>Change Your Password</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="acc__left__bottom">
                    <h2>My Orders</h2>
                    <div className="acc__left__top__cards">
                        <div className="acc__left__top__cards__card">
                            <div className="acc__left__top__cards__card__left">
                                <CiBoxes />
                            </div>
                            <div className="acc__left__top__cards__card__right">
                                <h6>View your Order History</h6>
                                <p>Edit Your Account</p>
                            </div>
                        </div>
                        <div className="acc__left__top__cards__card">
                            <div className="acc__left__top__cards__card__left">
                                <TbTruckReturn />
                            </div>
                            <div className="acc__left__top__card__right">
                                <h6>Edit Your Account Information</h6>
                                <p>Edit Your Account</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="acc__right">
                <div className="acc__right__card">
                    <h2> <BsPersonFill/>Account Settings</h2>
                    <ul>
                        <li><Link>My Account</Link></li>
                        <li><Link>Edit Account</Link></li>
                        <li><Link to="/forgot">Password</Link></li>
                        <li><Link>Address Book</Link></li>
                    </ul>
                </div>
                <div className="acc__right__card">
                    <h2><TfiPencilAlt/>My Orders</h2>
                    <ul>
                        <li><Link>Order History</Link></li>
                    </ul>
                </div>
                <div className="acc__right__card">
                    <h2><RiFolderUserFill/>My Stuff</h2>
                    <ul>
                        <li><Link to="/wishlist">Wish List</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
                <div className="acc__right__card">
                    <button><AiOutlinePoweroff/>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Acc