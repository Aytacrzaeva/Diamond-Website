import React, { useState, useEffect } from 'react';
import './Products2.scss';
import { RiShoppingBagLine } from 'react-icons/ri';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { add } from '../../../../store/cartSlice';
import { addwish } from '../../../../store/wishSlice';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link} from 'react-router-dom';

const useHoverImage = (mainImage, hoverImage) => {
  const [imageSource, setImageSource] = useState(mainImage);

  const handleImageHover = () => {
    setImageSource(hoverImage);
  };

  const handleImageLeave = () => {
    setImageSource(mainImage);
  };

  return [imageSource, handleImageHover, handleImageLeave];
};

const Products2 = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]); 
  const token = localStorage.getItem("token")

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error));
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const previousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const Card = ({ card }) => {
    if (!card) {
      return null;
    }

    const [imageSource, handleImageHover, handleImageLeave] = useHoverImage(card.main, card.hover);

    const handleAddToWish = (card) => {
      if (token) {
        dispatch(addwish(card));
        setWishlist([...wishlist, card._id]); 
        toast.success('Item added to wishlist!');
      } else {
       
      }
    };

    const isWishlistItem = (cardId) => {
      return wishlist.includes(cardId); 
    };

    const handleAddToCart = (card) => {
      if (token) {
        dispatch(add(card));
        toast.success('Item added to shopping bag!');
      } else {
        
      }
    };

    return (
      <div className="card" key={card._id}>
        <div className="card__icon">
        <button onClick={() => handleAddToWish(card)}>
            {isWishlistItem(card._id) ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
          </button>
        </div>
        <div className="card__header">
          <Link to={`${card._id}`}>{card.name}</Link>
        </div>
        <img
          src={`http://localhost:8080/public/${imageSource}`}
          alt="Slider"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        <div className="card__footer">
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
          <button className="add-to-cart" onClick={() => handleAddToCart(card)}>
            Add to Cart <RiShoppingBagLine />
          </button>        </div>
      </div>
    );
  };

  return (
    <div className="products2">
      <div className="products2__up">
        <div className="products2__up__left">
          <h1>Jewellery & diamonds</h1>
        </div>
        <div className="products2__up__right">
          <Link to='/products'>
            <button>Check More Product <RiShoppingBagLine /></button>
          </Link>
        </div>
      </div>
      <div className="products2__down">
        <div className="slider-wrapper">
          <button className="slider-button" onClick={previousCard}><MdOutlineKeyboardDoubleArrowLeft /></button>
          <div className="slider-container">
            <Card card={cards[(currentIndex - 1 + cards.length) % cards.length]} />
            <Card card={cards[currentIndex]} />
            <Card card={cards[(currentIndex + 1) % cards.length]} />
            <Card card={cards[(currentIndex + 2) % cards.length]} />
          </div>
          <button className="slider-button" onClick={nextCard}><MdOutlineKeyboardDoubleArrowRight /></button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Products2;
