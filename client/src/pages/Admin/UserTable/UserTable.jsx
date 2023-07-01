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
              <TableCell className="header-cell">Create Time</TableCell>
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
                  <TableCell>{user.createdAt}</TableCell>
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
