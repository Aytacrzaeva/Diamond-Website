import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import './UserTable.scss';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/auth/users')
      .then(response => {
        const filteredUsers = response.data.filter(user => !user.isAdmin);
        setUsers(filteredUsers);
        console.log(filteredUsers);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
    <div className="products-table">
      <h2>Users</h2>
      <div className="mytable">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell className="header-cell">Firstname</TableCell>
              <TableCell className="header-cell">Lastname</TableCell>
              <TableCell className="header-cell">Email</TableCell>
              <TableCell className="header-cell">Date of joining us</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{formatDate(user.createdAt)}</TableCell> {/* formatDate fonksiyonunu kullanarak değeri dönüştürüyoruz */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;
