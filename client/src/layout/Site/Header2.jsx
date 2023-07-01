import React, { useState, useEffect, useRef } from 'react';
import Logo from "../../images/logo.png";
import "./Header2.scss";
import { FiSearch } from 'react-icons/fi';
import { BsPersonFillAdd } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { FaLock } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header2 = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loggedIn, setLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isAdmin, setisAdmin] = useState(null)
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setShowProfileDropdown(false); // Close the dropdown
    console.log('logout');
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/getMe', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const userData = response.data;
        console.log(userData);
        setFirstname(userData.firstname);
        setLastname(userData.lastname);
        setisAdmin(userData.isAdmin)
      } catch (error) {
        console.warn(error);
        setFirstname("My Profile");

        console.log('yoxam');
      }
    };

    fetchUserData();
  }, [token]);

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const closeProfileDropdown = () => {
    setShowProfileDropdown(false);
  };

  const handleSearch = () => {
    setSearchTerm('');
    toggleSearchModal();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav2">
      <div className={`nav2__left ${showMenu ? 'margin-top' : ''}`}>
        {windowWidth <= 990 ? (
          <>
            <button className={`menu-button ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
              <GiHamburgerMenu />
            </button>
            {showMenu && (
              <ul className="menu-items">
                <li><a href="">Amethyst</a></li>
                <li><a href="">Blue Sapphire</a></li>
                <li><a href="">Black Diamond</a></li>
                <li><a href="">Ametrine</a></li>
              </ul>
            )}
          </>
        ) : (
          <ul>
            <li><a href="">Amethyst</a></li>
            <li><a href="">Blue Sapphire</a></li>
            <li><a href="">Black Diamond</a></li>
            <li><a href="">Ametrine</a></li>
          </ul>
        )}
      </div>
      <div className="nav2__middle">
        <img src={Logo} alt="" />
      </div>
      <div className="nav2__right">
        <div className="dropdown" ref={dropdownRef}>
          <button onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
            <AiOutlineUser />{firstname!=="My Profile"?firstname+" "+lastname:"My Profile"}
            {loggedIn && windowWidth > 770 ? "My Profile" : null} <FiChevronDown/>
          </button>
          {showProfileDropdown && (
            <div className="dropdown-content">
              <div className="dropdown-content-text">
                <h3>Your Account</h3>
                <p>Access account and manage orders</p>
              </div>
              {firstname!=="My Profile" && lastname && !isAdmin ? (
                <>
                  <Link to="/acc" onClick={closeProfileDropdown}><BsPersonFillAdd /> My Profile</Link>
                  <Link to="/orderhistory" onClick={closeProfileDropdown}> Order History</Link>
                  <Link onClick={logout}><BiLogOut /> Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/register" onClick={closeProfileDropdown}><BsPersonFillAdd /> Register</Link>
                  <Link to="/login" onClick={closeProfileDropdown}><FaLock /> Login</Link>
                  <Link to="/" onClick={closeProfileDropdown}><FaDollarSign /> Currency</Link>
                </>
              )}
              <Link to="/wishlist" onClick={closeProfileDropdown}><AiFillHeart /> Wishlist</Link>
            </div>
          )}
        </div>
        <div className="search">
          {showSearchModal && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal__input">
                  <input
                    className="modal-input"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="modal-search-button" onClick={handleSearch}><FiSearch/></button>
                </div>
                <button className="modal-close-button" onClick={toggleSearchModal}>X</button>
              </div>
            </div>
          )}
          {windowWidth > 770 ? (
            <button className="search-button" onClick={toggleSearchModal}>
              Search<FiSearch />
            </button>
          ) : (
            <button className="search-button" onClick={toggleSearchModal}>
              <FiSearch />
            </button>
          )}
        </div>
        <div className="cart">
          {windowWidth > 770 ? (
            <Link to="/cart">
              <AiOutlineShoppingCart/>Cart
            </Link>
          ) : (
            <Link to="/cart">
              <AiOutlineShoppingCart/>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header2;
