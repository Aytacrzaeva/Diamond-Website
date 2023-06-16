import React from 'react'
import "./DeliveryInfo.scss"
import {AiFillLike} from "react-icons/ai"
import {FaBus} from "react-icons/fa"
const DeliveryInfo = () => {
  return (
    <div className="conditions">
      <div className="conditions__up">
        <h2>Delivery Information</h2>
      </div>
      <div className="conditions__down">
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Delivery Time:</h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <FaBus/>
            </div>
            <div className="conditions__down__item__down__right">
            After receiving your order, we initiate the preparation process shipment and stay updated on its estimated delivery date as soon as possible. Typically, you can expect a delivery time of 2 to 5 business days.            </div>
          </div>
        </div>
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Shipping Service</h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <FaBus/>
            </div>
            <div className="conditions__down__item__down__right">
            All our shipments are handled by reliable courier companies. Your order will be shipped through a trusted courier service to ensure its safe and timely delivery.            </div>
          </div>
        </div>
        
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Tracking Information: </h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <FaBus/>
            </div>
            <div className="conditions__down__item__down__right">
            Once your order is dispatched, we will provide you with a tracking number. You can use this number to track the progress of your shipment and stay updated on its estimated delivery date.            </div>
          </div>
        </div>
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Delivery Address:</h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <FaBus/>
            </div>
            <div className="conditions__down__item__down__right">
            Please ensure that you provide us with the correct and complete delivery address to avoid any delays or misplacements. We are not responsible for any delivery issues arising from incorrect address details.

            </div>
          </div>
        </div>
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Packaging: </h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <FaBus/>
            </div>
            <div className="conditions__down__item__down__right">
            We take utmost care in packaging your precious jewelry items to ensure they arrive in perfect condition. Each piece is carefully wrapped and secured to prevent any damage during transit.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo