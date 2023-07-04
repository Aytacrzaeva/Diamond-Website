import React from 'react';
import "./Wish.scss"
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../store/cartSlice';
import { removewish } from '../../../store/wishSlice';

const Wish = () => {
  const items = useSelector(state => state.wish.items);
  const dispatch = useDispatch();

  const handleMoveToCart = (item) => {
    dispatch(add(item.prod));
    console.log("Item moved to cart");
  };

  const handleRemoveFromWish = (itemId) => {
    dispatch(removewish(itemId));
    console.log("Item removed from wishlist");
  };

  const tableCellStyle = {
    color: 'rgb(242, 223, 207)'
  };

  const imageCellStyle = {
    maxWidth: '100px',
    maxHeight: '100px'
  };

  return (
    <div className="wish">
      <h1>Wish List</h1>
      <Table>
        <TableHead>
          <TableRow style={tableCellStyle}>
            <TableCell style={tableCellStyle}>Image</TableCell>
            <TableCell style={tableCellStyle}>Product Name</TableCell>
            <TableCell style={tableCellStyle}>Model</TableCell>
            <TableCell style={tableCellStyle}>In Stock</TableCell>
            <TableCell style={tableCellStyle}>Price</TableCell>
            <TableCell style={tableCellStyle}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.prod._id} style={tableCellStyle}>
              <TableCell style={tableCellStyle}>
                <img src={`http://localhost:8080/public/${item.prod.main}`} alt={item.prod.name} style={imageCellStyle} />
              </TableCell>
              <TableCell style={tableCellStyle}>{item.prod.name}</TableCell>
              <TableCell style={tableCellStyle}>{item.prod.productcode}</TableCell>
              <TableCell style={tableCellStyle}>{item.prod.instock ? 'Yes' : 'No'}</TableCell>
              <TableCell style={tableCellStyle}>{item.prod.price}</TableCell>
              <TableCell style={tableCellStyle}>
                <div className="action-buttons">
                  <Button className="round-button" onClick={() => handleMoveToCart(item)}>
                    <FaShoppingCart />
                  </Button>
                  <Button className="round-button" onClick={() => handleRemoveFromWish(item.prod._id)}>
                    <AiOutlineCloseCircle />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="button-container">
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Wish;
