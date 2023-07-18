import React, { useEffect, useState } from 'react';
import axios from "axios";
import { RiShoppingBagLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "./Products.scss";
import { addwish } from '../../../store/wishSlice';
import { add } from '../../../store/cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentType, setCurrentType] = useState(true);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const cardItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToWish = (card) => {
    dispatch(addwish(card));
    console.log("Item added to wishlist");
  };

  const handleAddToCart = (card) => {
    dispatch(add(card));
    console.log("Item added to cart");
  };

  useEffect(() => {
    axios.get("http://localhost:8080/products").then(res => setProducts(res.data));
  }, []);

  useEffect(() => {
    // Filter products based on searchValue
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSortedProducts(filteredProducts);
  }, [searchValue, products]);

  const changeActiveType = () => {
    setCurrentType(!currentType);
  };

  return (
    <div className="custom-products">
      <div className="container">
        <h1>All Products</h1>
        <div className='sorted'>
          <div className='sort'>
            <button onClick={changeActiveType} className={currentType === true ? "active__type gridbtn" : "gridbtn"}><BsFillGrid3X3GapFill /></button>
            <button onClick={changeActiveType} className={currentType === false ? "active__type gridbtn" : "gridbtn"}><FaList /></button>
          </div>
          
          <div className='myinp'>
          <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
            <select name="" id="" onChange={(e) => {
              console.log(e.target.value);
              switch (e.target.value) {
                case "all":
                  setSortedProducts([...products]);
                  break;
                case "low":
                  setSortedProducts([...products.sort((a, b) => a.price - b.price)]);
                  break;
                case "high":
                  setSortedProducts([...products.sort((a, b) => b.price - a.price)]);
                  break;
              }
            }}>
              <option value="all">All</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
            
          </div>
        </div>
       
        <div className="row">
          {currentType ? sortedProducts.map((card, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card" key={card._id}>
                  <div className="card__icon" onClick={() => handleAddToWish(card)}>
                    <FaRegHeart />
                  </div>
                  <div className="card__header">
                    <Link to={`${card._id}`}>{card.name}</Link>
                  </div>
                  <img
                    src={`http://localhost:8080/public/${card.main}`}
                    alt="Slider"
                    onMouseEnter={(e) => {
                      e.target.src = `http://localhost:8080/public/${card.hover}`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.src = `http://localhost:8080/public/${card.main}`;
                    }}
                  />
                  <div className="card__footer card__button">
                    <div className="price">
                      <span>${card.price}</span>
                      <div className="star">
                        <p>*</p> <p>Size</p>
                        <div className="sizes">
                          {card.size && card.size.map((size, index) => (
                            <div className="ring" key={index}>{size}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="add-to-cart custom-btn" onClick={() => handleAddToCart(card)}>Add to Cart <RiShoppingBagLine /></button>
                  </div>
                </div>
              </div>
            );
          }) : sortedProducts.map((card, index) => {
            return (
              <div className="col-lg-12">
                <div className="card second__card" key={card._id}>
                  <div className="card__icon" onClick={() => handleAddToWish(card)}>
                    <FaRegHeart />
                  </div>
                  <div className="card__header">
                    <Link to={`${card._id}`}>{card.name}</Link>
                  </div>
                  <img
                    src={`http://localhost:8080/public/${card.main}`}
                    alt="Slider"
                    onMouseEnter={(e) => {
                      e.target.src = `http://localhost:8080/public/${card.hover}`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.src = `http://localhost:8080/public/${card.main}`;
                    }}
                  />
                  <div className="card__footer card__button">
                    <div className="price">
                      <span>${card.price}</span>
                      <div className="star">
                        <p>*</p> <p>Size</p>
                        <div className="sizes">
                          {card.size && card.size.map((size, index) => (
                            <div className="ring" key={index}>{size}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="add-to-cart custom-btn" onClick={() => handleAddToCart(card)}>Add to Cart <RiShoppingBagLine /></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
