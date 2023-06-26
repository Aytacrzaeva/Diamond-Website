import React from 'react';
import Gif from '../../../images/error.gif'
import Error from "../../../images/error2.png"
import "./ErrorPage.scss"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
  return (
    <div className='errorpage'>
        <Helmet>
            <title>
                Opss.. Error!
            </title>
        </Helmet>
      <Link to='/'>
      <img src={Error} alt="GIF" />
      </Link>
    </div>
  );
};

export default ErrorPage;
