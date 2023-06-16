import React from 'react';

import { Helmet } from 'react-helmet';
import MyCarousel from '../../../components/Site/Home/MySlider/MyCarousel';
import Categories from '../../../components/Site/Home/Categories/Categories'
import Products from '../../../components/Site/Home/Products1/Products'
import Products2 from '../../../components/Site/Home/Products2/Products2'
import Section1 from '../../../components/Site/Home/Section1/Section1'
import Products3 from '../../../components/Site/Home/Products3/Products3'
import Section2 from '../../../components/Site/Home/Section2/Section2'
import Partners from '../../../components/Site/Home/Partners/Partners'
import Categories2 from '../../../components/Site/Home/Categories2/Categories2'
import Blog from '../../../components/Site/Home/Blog/Blog'
import Chanel from '../../../components/Site/Home/Channel/Chanel'
import Scroll from '../../../components/Site/Home/Scroll/Scroll';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          DIAMONDS      </title>
      </Helmet>
      <MyCarousel />
      <Scroll/>
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

