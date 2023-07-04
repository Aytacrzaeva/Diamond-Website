import React, { useState, useEffect } from 'react';
import "./Blog.scss";
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/blogs')
      .then(response => response.json())
      .then(data => setBlogData(data));
  }, []);

  return (
    <div className="blog">
      <div className="blog__up">
        <h2>From Our Blog</h2>
      </div>
      <div className="blog__down">
        {blogData.map((blogItem, index) => {
            return(
                <div className="blog__down__card" key={index}>
            <div className="blog__down__card__img">
            <img src={`http://localhost:8080/public/${blogItem.image}`} alt="" />
            </div>
            <div className="blog__down__card__items">
              <div className="blog__down__card__item1">
              <Link to={`${blogItem._id}`}>{blogItem.name}</Link>
                <p>{blogItem.desc}</p>
              </div>
              <div className="blog__down__card__item2">
                <p>{blogItem.date}</p>
              </div>
            </div>
          </div>
            )
        })}
      </div>
    </div>
  );
}

export default Blog;
