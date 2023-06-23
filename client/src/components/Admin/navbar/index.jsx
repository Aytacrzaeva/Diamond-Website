import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiBigDiamondRing } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaUsers,FaComments } from "react-icons/fa";
import "./index.scss";
const AdminNavbar = () => {
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
            <Link onClick={() => setProduct(!product)}>
              <div className="iconn">
                <GiBigDiamondRing/>
              </div>
              All Products
            </Link>
            {product && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"allprod"}>
                    <i className="fa-solid fa-caret-right"></i>· Products Table
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"/film"}>
                    <i className="fa-solid fa-caret-right"></i>· Add Product
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-menu">
            <Link onClick={() => setOrder(!order)}>
              <div className="iconn">
                <TbTruckDelivery />
              </div>
              Orders
            </Link>
            {order && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"/cinema"}>
                    <i className="fa-solid fa-caret-right"></i>· Active Orders
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"/film"}>
                    <i className="fa-solid fa-caret-right"></i>· Order History
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-menu">
            <Link onClick={() => setUser(!user)}>
              <div className="iconn">
                <FaUsers />
              </div>
              Users
            </Link>
            {user && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"/cinema"}>
                    <i className="fa-solid fa-caret-right"></i>· Users Table
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-menu">
            <Link onClick={() => setBlog(!blog)}>
              <div className="iconn">
                <FaComments />
              </div>
              Blogs
            </Link>
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
            <Link onClick={() => setAdmin(!admin)}>
              <div className="iconn">
                <CgProfile />
              </div>
              Admin Profile
            </Link>
            {admin && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"/cinema"}>
                    <i className="fa-solid fa-caret-right"></i>· Profile Details
                  </NavLink>
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
