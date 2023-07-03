import React, { useState, useEffect } from 'react';
import './Products.scss';
import { RiShoppingBagLine } from 'react-icons/ri';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../../store/cartSlice';

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
  const dispatch = useDispatch();

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
    dispatch(add(card));
    console.log("Item added to cart");
  };

  const Card = ({ card }) => {
    if (!card) {
      return null;
    }

    const [imageSource, handleImageHover, handleImageLeave] = useHoverImage(card.main, card.hover);

    return (
      <div className="card" key={card._id}>
        <div className="card__icon">
          <button onClick={() => handleAddToCart(card)}><FaRegHeart /></button>
        </div>
        <div className="card__header">
          <Link to={`/products/${card._id}`}>{card.name}</Link>
        </div>
        <img
          src={`http://localhost:8080/public/${imageSource}`}
          alt="Slider Resim"
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
          <h1>Jewelry & Diamonds</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button>
            Check More Products <RiShoppingBagLine />
          </button>
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
    </div>
  );
};

export default Products;
