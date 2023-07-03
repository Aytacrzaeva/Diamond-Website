import React, { useState, useEffect } from 'react';
import './Basket.scss';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remove,countChange } from '../../../store/cartSlice';

const Basket = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  console.log("products", products);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (products && products.length > 0) {
      setItems(products.map((product) => ({ ...product, quantity: 1 })));
    }
  }, [products]);

  const handleRemove = (productId) => {
    dispatch(remove(productId)); 
    setItems((prevItems) => prevItems.filter((item) => item.prod._id !== productId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const quantity = parseInt(newQuantity) || 1;
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: quantity >= 1 ? quantity : 1 } : item
      );
      return [...updatedItems];
    });
  };
  

  const tableCellStyle = {
    color: 'rgb(242, 223, 207)',
  };

  const imageCellStyle = {
    maxWidth: '100px',
    maxHeight: '100px',
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      const price = item.prod.price;
      const quantity = item.count;
      if (!isNaN(price) && !isNaN(quantity)) {
        totalPrice += price * quantity;
      }
    });
    return totalPrice.toFixed(2); // Yuvarlağı iki ondalık basamağa ayarla
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
            <TableRow key={item.prod._id} style={tableCellStyle}>
              <TableCell style={tableCellStyle}>
                <img
                  src={`http://localhost:8080/public/${item.prod.main}`}
                  alt="Slider"
                  style={imageCellStyle}
                />
              </TableCell>
              <TableCell style={tableCellStyle}>{item.prod.name}</TableCell>
              <TableCell style={tableCellStyle}>{item.prod.productcode}</TableCell>
              <TableCell style={tableCellStyle}>{item.prod.instock ? 'Yes' : 'No'}</TableCell>
              <TableCell style={tableCellStyle}>{item.prod.price}</TableCell>
              <TableCell style={tableCellStyle}>
                <input
                  className="basket-input"
                  type="number"
                  value={item.count}
                  onChange={(e) => {
                    dispatch(countChange({_id:item.prod._id,value:e.target.value}))
                  }}
                />
              </TableCell>
              <TableCell style={tableCellStyle}>
                <Button className="round-button" onClick={() => handleRemove(item.prod._id)}>
                  <AiOutlineCloseCircle />
                </Button>
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
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
        <Link to="/checkout">
          <Button onClick={(e)=>{
            localStorage.setItem("basketItems",JSON.stringify(products))
          }}>Confirm</Button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;

