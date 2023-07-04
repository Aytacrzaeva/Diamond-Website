import React, { useEffect, useState } from 'react'
import BlogBack from '../../../components/Site/Blog/BlogBack';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import './BlogDetail.scss'
const BlogDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/blogs/${id}`).then((res) => {
          setData(res.data);
        });
      }, [id]);
  return (
    <>
    <BlogBack/>
    <Helmet>
        <title>Blog Detail</title>
      </Helmet>
    <div className="blogdetail">
        <div className="blogdetail__top">
        <img src={`http://localhost:8080/public/${data.image}`} alt="" />
        </div>
        <div className="blogdetail__bottom">
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
            <p>{data.date}</p>
        </div>
    </div>
    </>
  )
}

export default BlogDetail