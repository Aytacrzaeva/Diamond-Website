import React, { useEffect, useState } from 'react';
import Products2 from '../../../components/Site/Home/Products2/Products2'
import { FaList } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import Ring1 from "../../../images/products/1/1-1000x1000.png";
import Ring1_2 from "../../../images/products/1/2-1000x1000.png";
import Ring2 from "../../../images/products/2/1-1000x1000-1.png";
import Ring2_2 from "../../../images/products/2/2-1000x1000-1.png";
import Ring3 from "../../../images/products/3/1-1000x1000-2.png";
import Ring3_2 from "../../../images/products/3/2-1000x1000-2.png";
import Ring4 from "../../../images/products/4/1-1000x1000-3.png";
import Ring4_2 from "../../../images/products/4/3-1000x1000.png";
import Ring5 from "../../../images/products/5/1-1000x1000.png";
import Ring5_2 from "../../../images/products/5/2-1000x1000.png";
import Ring6 from "../../../images/products/1/1-1000x1000.png";
import Ring6_2 from "../../../images/products/1/2-1000x1000.png";
import Ring7 from "../../../images/products/2/1-1000x1000-1.png";
import Ring7_2 from "../../../images/products/2/2-1000x1000-1.png";
import Ring8 from "../../../images/products/3/1-1000x1000-2.png";
import Ring8_2 from "../../../images/products/3/2-1000x1000-2.png";
import Ring9 from "../../../images/products/4/1-1000x1000-3.png";
import Ring9_2 from "../../../images/products/4/3-1000x1000.png";
import Ring10 from "../../../images/products/5/1-1000x1000.png";
import Ring10_2 from "../../../images/products/5/2-1000x1000.png";
import "./Products.scss";
import { Helmet } from 'react-helmet';
import axios from 'axios'

const Products = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/products')
    .then(res=>setdata(res.data))
  }, [])
  
  const images = [
    { main: Ring1, hover: Ring1_2 },
    { main: Ring2, hover: Ring2_2 },
    { main: Ring3, hover: Ring3_2 },
    { main: Ring4, hover: Ring4_2 },
    { main: Ring5, hover: Ring5_2 },
    { main: Ring6, hover: Ring6_2 },
    { main: Ring7, hover: Ring7_2 },
    { main: Ring8, hover: Ring8_2 },
    { main: Ring9, hover: Ring9_2 },
    { main: Ring10, hover: Ring10_2 },
  ];

  const cards = [
    {
      id: 1,
      title: "Stars Ring",
      price: 150,
      sizes: ["16", "19", "20", "22"]
    },
    {
      id: 2,
      title: "Abigail Moon",
      price: 150,
      sizes: ["16", "19", "20", "22"]
    },
    {
      id: 3,
      title: "salam",
      price: 140,
      sizes: ["15", "18", "20"]
    },
    {
      id: 4,
      title: "sagol",
      price: 140,
      sizes: ["16", "18", "20"]
    },
    {
      id: 5,
      title: "a",
      price: 140,
      sizes: ["16", "18", "20"]
    },
    {
      id: 6,
      title: "a",
      price: 140,
      sizes: ["16", "18", "20"]
    }, 
    {
      id: 7,
      title: "a",
      price: 140,
      sizes: ["16", "18", "20"]
    }, 
    {
      id: 8,
      title: "a",
      price: 140,
      sizes: ["16", "18", "20"]
    },
    {
      id: 9,
      title: "aytac",
      price: 100,
      sizes: ["16", "18", "20"]
    },
    {
      id: 10,
      title: "rzayeva",
      price: 1400,
      sizes: ["16", "18", "20"]
    }
    // Diğer kartları buraya ekleyin
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isGrid, setIsGrid] = useState(true);
  const [sortOption, setSortOption] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const handleListView = () => {
    setIsGrid(false);
  };

  const handleGridView = () => {
    setIsGrid(true);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortCards = () => {
    switch (sortOption) {
      case "lowToHigh":
        return [...cards].sort((a, b) => a.price - b.price);
      case "highToLow":
        return [...cards].sort((a, b) => b.price - a.price);
      default:
        return cards;
    }
  };

  const addToCart = () => {
    console.log("Ürün sepete eklendi!");
  };

  const renderCard = (index) => {
    const card = sortCards()[index];

    const handleCardClick = () => {
      setSelectedCardIndex(index);
    };

    const handleImageHover = (event) => {
      event.target.src = images[index].hover;
    };

    const handleImageLeave = (event) => {
      event.target.src = images[index].main;
    };

    return (
      <div
        className={`card ${selectedCardIndex === index ? 'selected' : ''}`}
        key={card.id}
        onClick={handleCardClick}
      >
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
            <span>${card.price}</span>
            <div className="star">
              <p>*</p> <p>Size</p>
              <div className="sizes">
                {
                // data&&data
                card.sizes.map((size, index) => {
                  return(
                    <div>
                      <div className="ring" key={index}>{size}</div>
                      {/* <img src={`http://localhost:8080/public/${size.images}`} alt="" /> */}
                      
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <button className="add-to-cart" onClick={addToCart}>Add to Cart <RiShoppingBagLine /></button>
        </div>
      </div>
    );
  };

  // Sayfa değiştirme fonksiyonları
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(sortCards().length / pageSize);

    return (
      <div className="pagination-buttons">
        {currentPage > 1 && (
          <button onClick={() => goToPage(currentPage - 1)}><MdOutlineKeyboardDoubleArrowLeft/></button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => goToPage(currentPage + 1)}><MdOutlineKeyboardDoubleArrowRight/></button>
        )}
      </div>
    );
  };

  const renderCards = () => {
    const sortedCards = sortCards();
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentCards = sortedCards.slice(startIndex, endIndex);

    return currentCards.map((card, index) => renderCard(index));
  };

  return (
    <>
    <div className="prod">
      <div className="prod__left">
        <div className="h2div">
          <h2>Category</h2>
        </div>
        <ul>
          <li><Link to="/">Amethyst</Link></li>
          <li><Link to="/">Bead</Link></li>
          <li><Link to="/">Blue Sapphire</Link></li>
          <li><Link to="/">Burma Ruby</Link></li>
          <li><Link to="/">Black Diamond</Link></li>
          <li><Link to="/">Ametrine</Link></li>
        </ul>
      </div>
      <div className="prod__right">
        <div className="prod__right__top">
          <div className="grid">
            <button onClick={handleListView}><FaList /></button>
            <button onClick={handleGridView}><BsFillGrid3X3GapFill /></button>
          </div>
          <div className="sort">
            <select value={sortOption} onChange={handleSortChange}>
              <option value="all">All</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </div>
        <div className={`prod__right__bottom ${isGrid ? 'grid-view' : 'list-view'}`}>
          {renderCards()}
        </div>
        {renderPaginationButtons()}
      </div>
    </div>
    <Products2/>
    <Helmet>
      <title>
        All Products
      </title>
    </Helmet>
    </>
  );
};

export default Products;
