import React, { useState } from 'react';
import './Products2.scss';
import { RiShoppingBagLine } from 'react-icons/ri';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import Ring1 from "../../../../images/products/1/1-1000x1000.png"
import Ring1_2 from "../../../../images/products/1/2-1000x1000.png"
import Ring2 from "../../../../images/products/2/1-1000x1000-1.png"
import Ring2_2 from "../../../../images/products/2/2-1000x1000-1.png"
import Ring3 from "../../../../images/products/3/1-1000x1000-2.png"
import Ring3_2 from "../../../../images/products/3/2-1000x1000-2.png"
import Ring4 from "../../../../images/products/4/1-1000x1000-3.png"
import Ring4_2 from "../../../../images/products/4/3-1000x1000.png"
import Ring5 from "../../../../images/products/5/1-1000x1000.png"
import Ring5_2 from "../../../../images/products/5/2-1000x1000.png"

const Products2 = () => {


  const images = [  
    { main: Ring1, hover: Ring1_2 },
    { main: Ring2, hover: Ring2_2 },
    { main: Ring3, hover: Ring3_2 },
    { main: Ring4, hover: Ring4_2 },
    { main: Ring5, hover: Ring5_2 }
  ];

  const cards = [
    {
      id: 1,
      title: "Stars Ring",
      price: "$150",
      sizes: ["16", "19", "20", "22"],
      // posterImage:"",
      // hoverImage:""
    },
    {
      id: 2,
      title: "Abigail Moon",
      price: "$150",
      sizes: ["16", "19", "20", "22"]
    },
    {
      id: 3,
      title: "salam",
      price: "$140",
      sizes: ["15", "18", "20"]
    },
    {
      id: 4,
      title: "sagol",
      price: "$140",
      sizes: ["16", "18", "20"]
    }
    // Add other cards here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const previousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const addToCart = () => {
    console.log("Ürün sepete eklendi!");
  };

  const renderCard = (index) => {
    const card = cards[index];

    const handleImageHover = (event) => {
      event.target.src = images[index].hover; 
      // cards[i].hoverImage
    };

    const handleImageLeave = (event) => {
      event.target.src = images[index].main;
    };

    return (
      <div className="card" key={card.id}>
        <div className="card__icon">
          <FaRegHeart />
        </div>
        <div className="card__header">
          <a href="">{card.title}</a>
        </div>
        <img
          src={images[index].main}
          alt="Slider Resim"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        <div className="card__footer">
          <div className="price">
            <span>{card.price}</span>
            <div className="star">
              <p>*</p> <p>Size</p>
              <div className="sizes">
                {card.sizes.map((size, index) => (
                  <div className="ring" key={index}>{size}</div>
                ))}
              </div>
            </div>
          </div>
          <button className="add-to-cart" onClick={addToCart}>Add to Cart <RiShoppingBagLine /></button>
        </div>
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
          <button>Check More Product <RiShoppingBagLine/></button>
        </div>
      </div>
      <div className="products2__down">
        <div className="slider-wrapper">
          <button className="slider-button" onClick={previousCard}><MdOutlineKeyboardDoubleArrowLeft /></button>
          <div className="slider-container">
            {renderCard(currentIndex)}
            {renderCard((currentIndex + 1) % cards.length)}
            {renderCard((currentIndex + 2) % cards.length)}
            {renderCard((currentIndex + 3) % cards.length)}
          </div>
          <button className="slider-button" onClick={nextCard}><MdOutlineKeyboardDoubleArrowRight /></button>
        </div>
      </div>
    </div>
  );
}

export default Products2;
