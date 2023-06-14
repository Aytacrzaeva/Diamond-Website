import React from 'react'
import "./Categories.scss"
import { RiShoppingBagLine } from "react-icons/ri"
import { BsGift } from "react-icons/bs"
import { FaPercent } from "react-icons/fa"
import { GiHandTruck } from "react-icons/gi" 



const Categories = () => {
    return (
        <div className="categories">
            <div className="categories__cards">
                <div className="categories__cards__card1">
                    <h4>CATEGORIES</h4>
                    <h2>Bestsellers</h2>
                    <button>Check More Products <RiShoppingBagLine /></button>
                </div>
                <div className="categories__cards__card2">
                    <h4>CATEGORIES</h4>
                    <h2>Necklace</h2>
                    <button>Check More Products <RiShoppingBagLine /></button>
                </div>
                <div className="categories__cards__card3">
                    <h4>CATEGORIES</h4>
                    <h2>Rings</h2>
                    <button>Check More Products <RiShoppingBagLine /></button>
                </div>

            </div>
            <div className="categories__texts">
                <div className="categories__texts__text">
                    <BsGift className='icons'/>
                    <div className="content">
                    <p>Finished Products </p>
                    <p> products and gift wrapping</p>

                    </div>
                </div>
                <div className="categories__texts__text">
                    <FaPercent className='icons' />
                    <div className="content">
                    <p>Finished Products </p>
                    <p>promotions With Numerous Discounts</p>

                    </div>
                </div>
                <div className="categories__texts__text">
                    <GiHandTruck className='icons'/>
                    <div className="content">
                    <p>Finished Products </p>
                    <p>on Any Order From $ 150</p>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories