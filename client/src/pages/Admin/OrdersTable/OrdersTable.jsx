import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./OrdersTable.scss";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/orders');
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order._id === id) {
          return { ...order, status: newStatus };
        }
        return order;
      });
    });
  };
  const handleSaveChanges = async (id, newStatus) => {
    try {
      const response = await axios.get(`http://localhost:8080/orders/${id}`);
      const order = response.data;
  
      const updatedOrder = { ...order, status: newStatus };
  
      await axios.put(`http://localhost:8080/orders/${id}`, updatedOrder);
      
      setOrders(prevOrders => {
        return prevOrders.map(order => {
          if (order._id === id) {
            return updatedOrder;
          }
          return order;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  

  return (
    <div className="orders">
      {orders && orders.map((order) => (
        <div className="order" key={order?._id}>
          {order?.user && (
            <React.Fragment>
              <h2>{order?.user.firstname} {order?.user.lastname}</h2>
              <p>Email: {order?.user.email}</p>
              <p>Address: {order?.user.address}</p>
            </React.Fragment>
          )}
          <p>Payment Method: {order?.paymentMethod}</p>
          {order?.products && order?.products.map((product) => (
            <div className="product" key={product?.prod?._id}>
              {product?.prod?.name && <p>Product: {product?.prod?.name}</p>}
              <p>Quantity: {product?.count}</p>
              {product?.prod?.createdAt && <p>Created At: {product?.prod?.createdAt}</p>}
            </div>
          ))}
          <p>Status: {order?.status}</p>
          <select
            value={order?.status}
            onChange={(e) => handleStatusChange(order?._id, e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
          <button onClick={() => handleSaveChanges(order?._id, order?.status)}>Save</button>
        </div>
      ))}
    </div>
  );
};

export default OrdersTable;
