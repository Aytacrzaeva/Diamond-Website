import React from 'react'
import {RiShoppingBagLine} from 'react-icons/ri'
import "./Categories2.scss"
const Categories2 = () => {
  return (
    <div className="categories2">
        <div className="categories2__left">
        <h1>Jewelry & diamonds</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          <button>Check More Products <RiShoppingBagLine /></button>
        </div>
        <div className="categories2__right">
        <div className="categories2__cards">
                
                <div className="categories2__cards__card2">
                    <h4>CATEGORIES</h4>
                    <h2>Necklace</h2>
                    <button>Check More Products <RiShoppingBagLine /></button>
                </div>
                <div className="categories2__cards__card3">
                    <h4>CATEGORIES</h4>
                    <h2>Rings</h2>
                    <button>Check More Products <RiShoppingBagLine /></button>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Categories2