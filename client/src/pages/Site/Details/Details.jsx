import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/cartSlice';
import { addwish as addToWishlist } from '../../../store/wishSlice';
import { Toaster, toast } from 'react-hot-toast';
import './Details.scss';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [count, setCount] = useState(1); 
  const [isWishlist, setIsWishlist] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const quantity = Math.max(1, count);
    for (let i = 0; i < quantity; i++) {
      dispatch(add(data));
    }
    setCount(1);
  };

const handleAddToWishlist = () => {
  if (isWishlist) {
    setIsWishlist(false);
    toast.success("Removed from Wishlist");
  } else {
    dispatch(addToWishlist(data)); // Assuming `data` contains the product details
    setIsWishlist(true);
    toast.success("Added to Wishlist");
  }
};


  return (
    <>
      <Helmet>
        <title>Product Detail</title>
      </Helmet>
      <div className="detail">
        <div className="detail__left">
          <img src={`http://localhost:8080/public/${data.main}`} alt="" />
        </div>
        <div className="detail__right">
          <div className="detailback">
            <div className="detailback__left">
              <div className="detailback__left__button">
                <button>
                  <Link to="/products">
                    <BsArrowLeftCircle id="back" />
                  </Link>
                  Back to All Products
                </button>
              </div>
            </div>
            <div className="detailback__right">
              <Link to="/">
                <AiFillHome />
              </Link>
              <p>/</p>
              <p>Detail</p>
            </div>
          </div>
          <div className="detail__left__header">
            <h2>{data.name}</h2>
            <button onClick={handleAddToWishlist}>
              {isWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
          </div>
          <div className="detail__left__body">
            <p>Product Code:</p>
            <p>{data.productcode}</p>
          </div>
          
          <div className="detail__left__counter">
            <span onClick={decrementCount}>-</span>
            <p>{count}</p>
            <span onClick={incrementCount}>+</span>
          </div>
          <div className="detail__left__price">
            <p>{data.price}$</p>
          </div>
          <div className="detail__left__button">
            <button onClick={handleAddToCart}>
              Add to Cart
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
        <Toaster/>
      </div>
    </>
  );
};

export default Details;
