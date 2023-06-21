import React from 'react';
import "./Wish.scss"
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import Ring1 from "../../../images/products/5/1-1000x1000.png";
import {AiOutlineCloseCircle} from "react-icons/ai"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';


const Wish = () => {
  const items = [
    {
      id: 1,
      image: Ring1,
      productName: 'Product 1',
      model: 'Model 1',
      inStock: true,
      price: '$10.00'
    },
    {
      id: 2,
      image: Ring1,
      productName: 'Product 2',
      model: 'Model 2',
      inStock: false,
      price: '$20.00'
    },
    {
      id: 3,
      image: Ring1,
      productName: 'Product 3',
      model: 'Model 3',
      inStock: true,
      price: '$200.00'
    }
    
    // Diğer wishlist öğeleri
  ];

  const handleAction = (item) => {
    console.log('Action clicked for item:', item);
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
            <TableRow key={item.id} style={tableCellStyle}>
              <TableCell style={tableCellStyle}>
                <img src={item.image} alt={item.productName} style={imageCellStyle} />
              </TableCell>
              <TableCell style={tableCellStyle}>{item.productName}</TableCell>
              <TableCell style={tableCellStyle}>{item.model}</TableCell>
              <TableCell style={tableCellStyle}>{item.inStock ? 'Yes' : 'No'}</TableCell>
              <TableCell style={tableCellStyle}>{item.price}</TableCell>
              <TableCell style={tableCellStyle}>
                <div className="action-buttons">
                <Button className="round-button"  onClick={() => handleAction(item)}><FaShoppingCart/></Button>
                <Button className="round-button"  onClick={() => handleAction(item)}><AiOutlineCloseCircle/></Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="button-container">
                <Link to="/products"><Button >Continue Shopping</Button></Link>
            </div>
    </div>
  );
};

export default Wish;
