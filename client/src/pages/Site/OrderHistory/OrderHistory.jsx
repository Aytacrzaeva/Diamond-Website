import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const OrderHistory = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:8080/users');
        const ordersResponse = await axios.get('http://localhost:8080/orders');

        setUsers(usersResponse.data);
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getUserOrders = (email) => {
    return orders.filter((order) => order.user.email === email);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.firstname} {user.lastname} Orders</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getUserOrders(user.email).map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order._id}</TableCell>
                    <TableCell>{order.products[0].prod.name}</TableCell>
                    <TableCell>{order.products[0].count}</TableCell>
                    <TableCell>{order.products[0].prod.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
