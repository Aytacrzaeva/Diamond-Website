import React, { useState } from "react";
import { Link, NavLink,navigate, useNavigate } from "react-router-dom";
import { GiBigDiamondRing } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaUsers,FaComments } from "react-icons/fa";
import { BiLogOut } from 'react-icons/bi';

import "./index.scss";
const AdminNavbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token');
    console.log('logout');
    navigate('/')
  };
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);
  const [user, setUser] = useState(false);
  const [blog, setBlog] = useState(false);
  const [admin, setAdmin] = useState(false);
  return (
    <div className="admin-navbar">
      <div className="nav1">
        <div className="logo">
            <Link to={"/admin"}>
              <img src="https://opencart.workdo.io/diamond/image/catalog/storlogo/logo.png" alt="" />
            </Link>
        </div>
      </div>
      <nav>
        <ul>
          <li className="nav-menu">
            <a onClick={() => setProduct(!product)}>
              <div className="iconn">
                <GiBigDiamondRing/>
              </div>
              All Products
            </a>
            {product && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"allprod"}>
                    <i className="fa-solid fa-caret-right"></i>· Products Table
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"addprod"}>
                    <i className="fa-solid fa-caret-right"></i>· Add Product
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-menu">
            <a onClick={() => setOrder(!order)}>
              <div className="iconn">
                <TbTruckDelivery />
              </div>
              Orders
            </a>
            {order && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"order"}>
                    <i className="fa-solid fa-caret-right"></i>· All Orders
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-menu">
            <a onClick={() => setUser(!user)}>
              <div className="iconn">
                <FaUsers />
              </div>
              Users
            </a>
            {user && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"users"}>
                    <i className="fa-solid fa-caret-right"></i>· Users Table
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-menu">
            <a onClick={() => setBlog(!blog)}>
              <div className="iconn">
                <FaComments />
              </div>
              Blogs
            </a>
            {blog && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"/cinema"}>
                    <i className="fa-solid fa-caret-right"></i>· All Blogs
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"/cinema"}>
                    <i className="fa-solid fa-caret-right"></i>· Add Blog
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-menu">
            <a onClick={() => setAdmin(!admin)}>
              <div className="iconn">
                <CgProfile />
              </div>
              Admin Profile
            </a>
            {admin && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"/"}>
                    <i className="fa-solid fa-caret-right"></i>· Profile Details
                  </NavLink>
                </li>
                <li className="menu-item">
                  
                  <Link onClick={logout}><BiLogOut /> Logout</Link>
                  
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
