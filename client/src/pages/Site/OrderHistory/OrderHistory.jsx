import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './OrderHistory.scss';

const OrderHistory = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token")  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:8080/auth/getMe', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const ordersResponse = await axios.get('http://localhost:8080/orders');
        console.log(usersResponse.data);
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

  // createdAt değerini istediğiniz formata dönüştürmek için bir yardımcı fonksiyon
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
    return formattedDate.toLocaleString('en-US', options);
  };

  return (
    <div className='userorder'>
      <div>
        <h2>{users.firstname} {users.lastname}'s Orders</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Date</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Order Status</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getUserOrders(users.email).map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{formatDate(order.createdAt)}</TableCell> {/* formatDate fonksiyonunu kullanarak değeri dönüştürüyoruz */}
                  <TableCell>{order.products[0].prod.name}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>${order.products[0].prod.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrderHistory;
