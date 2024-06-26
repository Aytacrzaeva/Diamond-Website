import React, { useState, useEffect } from 'react';
import './Products.scss';
import { RiShoppingBagLine } from 'react-icons/ri';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../../store/cartSlice';
import { addwish, removewish } from '../../../../store/wishSlice'; // Assuming you have a function to remove from wishlist
import toast, { Toaster } from 'react-hot-toast';

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

const Products = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]); 
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error));
  }, []);

  const nextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
  };

  const previousCard = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleAddToCart = (card) => {
    if (token) {
      dispatch(add(card));
      toast.success('Item added to shopping bag!');
    } else {
      navigate('/login');
    }
  };

  const handleToggleWish = (card) => {
    if (token) {
      if (wishlist.includes(card._id)) {
        dispatch(removewish(card));
        toast.success('Item removed from wishlist!');
        setWishlist(prev => prev.filter(item => item !== card._id));
      } else {
        dispatch(addwish(card));
        toast.success('Item added to wishlist!');
        setWishlist([...wishlist, card._id]);
      }
    } else {
      navigate('/login');
    }
  };

  const isWishlistItem = (cardId) => {
    return wishlist.includes(cardId);
  };

  const Card = ({ card }) => {
    if (!card) {
      return null;
    }

    const [imageSource, handleImageHover, handleImageLeave] = useHoverImage(card.main, card.hover);

    return (
      <div className="card" key={card._id}>
        <div className="card__icon">
          <button onClick={() => handleToggleWish(card)}>
            {isWishlistItem(card._id) ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
          </button>
        </div>
        <div className="card__header">
          <Link to={`/${card._id}`}>{card.name}</Link>
        </div>
        <img
          src={`http://localhost:8080/public/${imageSource}`}
          alt="x"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        <div className="card__footer">
          <div className="price">
            <span>${card.price}</span>
            <div className="star">
              <p>*</p> <p>Size</p>
              <div className="sizes">
                {card.size &&
                  card.size.map((size, index) => (
                    <div className="ring" key={index}>
                      {size}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <button className="add-to-cart" onClick={() => handleAddToCart(card)}>
            Add to Cart <RiShoppingBagLine />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="products">
      <div className="products__left">
        <div className="products__left__text">
          <h1>Jewellery & Diamonds</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Link to='/products'>
            <button>
              Check More Products <RiShoppingBagLine />
            </button>
          </Link>
        </div>
      </div>
      <div className="products__right">
        <div className="slider-wrapper">
          <button className="slider-button" onClick={previousCard}>
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <div className="slider-container">
            <Card card={cards[currentIndex]} />
            <Card card={cards[(currentIndex + 1) % cards.length]} />
          </div>
          <button className="slider-button" onClick={nextCard}>
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Products;
