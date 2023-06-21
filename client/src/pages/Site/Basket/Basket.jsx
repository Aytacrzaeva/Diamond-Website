import React, { useState } from 'react';
import "./Basket.scss";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import Ring1 from "../../../images/products/5/1-1000x1000.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Basket = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            image: Ring1,
            productName: 'Product 1',
            model: 'Model 1',
            inStock: true,
            price: '$10.00',
            quantity: 1
        },
        {
            id: 2,
            image: Ring1,
            productName: 'Product 2',
            model: 'Model 2',
            inStock: false,
            price: '$20.00',
            quantity: 1
        },
        {
            id: 3,
            image: Ring1,
            productName: 'Product 3',
            model: 'Model 3',
            inStock: true,
            price: '$200.00',
            quantity: 1
        }
    ]);

    const handleAction = (item) => {
        console.log('Action clicked for item:', item);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const tableCellStyle = {
        color: 'rgb(242, 223, 207)'
    };

    const imageCellStyle = {
        maxWidth: '100px',
        maxHeight: '100px'
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        items.forEach((item) => {
            const price = parseFloat(item.price.replace('$', ''));
            totalPrice += price * item.quantity;
        });
        return totalPrice.toFixed(2);
    };

    

    return (
        <div className="wish">
            <h1>Shopping Cart</h1>
            <Table>
                <TableHead>
                    <TableRow style={tableCellStyle}>
                        <TableCell style={tableCellStyle}>Image</TableCell>
                        <TableCell style={tableCellStyle}>Product Name</TableCell>
                        <TableCell style={tableCellStyle}>Model</TableCell>
                        <TableCell style={tableCellStyle}>In Stock</TableCell>
                        <TableCell style={tableCellStyle}>Price</TableCell>
                        <TableCell style={tableCellStyle}>Quantity</TableCell>
                        <TableCell style={tableCellStyle}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id} style={tableCellStyle}>
                            <TableCell style={tableCellStyle}>
                                <img src={item.image} alt={item.productName} style={imageCellStyle} />
                            </TableCell>
                            <TableCell style={tableCellStyle}>{item.productName}</TableCell>
                            <TableCell style={tableCellStyle}>{item.model}</TableCell>
                            <TableCell style={tableCellStyle}>{item.inStock ? 'Yes' : 'No'}</TableCell>
                            <TableCell style={tableCellStyle}>{item.price}</TableCell>
                            <TableCell style={tableCellStyle}>
                                <input
                                    className='basket-input'
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                />
                            </TableCell>
                            <TableCell style={tableCellStyle}>
                                <Button className="round-button" onClick={() => handleAction(item)}><AiOutlineCloseCircle /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableBody>
                    <TableRow style={tableCellStyle}>
                        <TableCell style={tableCellStyle} colSpan={4}></TableCell>
                        <TableCell style={tableCellStyle}>Total</TableCell>
                        <TableCell style={tableCellStyle}>${calculateTotalPrice()}</TableCell>
                        <TableCell style={tableCellStyle}></TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className="button-container">
                <Link to="/products"><Button >Continue Shopping</Button></Link>
                <Link to="/confirm"><Button>Confirm</Button></Link>
            </div>
        </div>
    );
};

export default Basket;
