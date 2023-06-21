import React from 'react'
import { RxPerson } from 'react-icons/rx'
import {SlLock} from 'react-icons/sl'
import {CiBoxes} from 'react-icons/ci'
import {TbTruckReturn} from 'react-icons/tb'
import "./Acc.scss"
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
                                <h6>Edit Your Account Information</h6>
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
                <div className="acc__right__card"></div>
            </div>
        </div>
    )
}

export default Acc