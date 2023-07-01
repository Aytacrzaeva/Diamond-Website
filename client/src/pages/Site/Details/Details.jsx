import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillHome } from 'react-icons/ai';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.scss';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < data.rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <>
      <Helmet>
        <title>Product Detail</title>
      </Helmet>
      <div className="detail">
        <div className="detail__left">
          <img src={`http://localhost:8080/public/${data.images}`} alt="" />
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
            <button>
              <FaRegHeart />
            </button>
          </div>
          <div className="detail__left__body">
            <p>Product Code:</p>
            <p>{data.productcode}</p>
          </div>
          <div className="detail__left__size">
            <p>*Size</p>
            {data.size && data.size.map((size) => <button key={size}>
              <span>{size}</span>
            </button>)}
          </div>
          <div className="detail__left__counter">
            <span onClick={decrementCount}>-</span>
            <p>{count}</p>
            <span onClick={incrementCount}>+</span>
          </div>
          <div className="detail__left__price">
            <p>{data.price}$</p>
          </div>
          <div className="detail__left__rating">
            {renderRatingStars()}
          </div>
          <div className="detail__left__button">
            <button>
              Add to Cart
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
