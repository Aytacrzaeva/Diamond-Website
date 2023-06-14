import React from 'react';
import MyCarousel from '../../../components/Site/MySlider/MyCarousel';
import Categories from '../../../components/Site/Categories/Categories';
import Products from '../../../components/Site/Products1/Products';
import Products2 from '../../../components/Site/Products2/Products2';
import Section1 from '../../../components/Site/Section1/Section1';
import Products3 from '../../../components/Site/Products3/Products3';
import Section2 from '../../../components/Site/Section2/Section2';
import Partners from '../../../components/Site/Partners/Partners';
import Categories2 from '../../../components/Site/Categories2/Categories2';
import Blog from '../../../components/Site/Blog/Blog';
import Chanel from '../../../components/Site/Channel/Chanel';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          DIAMONDS      </title>
      </Helmet>
      <MyCarousel />
      <Categories />
      <Products />
      <Products2 />
      <Section1 />
      <Products3 />
      <Section2 />
      <Partners />
      <Categories2 />
      <Blog />
      <Chanel />
    </>
  );
};

export default Home;

