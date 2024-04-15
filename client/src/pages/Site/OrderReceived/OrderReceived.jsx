import React from 'react'
import "./OrderReceived.scss"
import { Link } from 'react-router-dom'
const OrderReceived = () => {
    return (
        <div className="received">
            <h1>Thank you for shopping!</h1>
            <h2>We've received your order!</h2>
            <p>We are starting to prepare your order immediately, dear customer! </p>
            <p> You can check the order history section in your profile for the status of your order!</p>
            <Link to='/'>Continue shopping</Link>
        </div>
    )
}

export default OrderReceived