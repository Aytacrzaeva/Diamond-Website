import {MdOutlineKeyboardDoubleArrowUp} from 'react-icons/md'
import React from 'react';
import { Link } from 'react-scroll';
import './Scroll.scss';

const Scroll = () => {
  return (
    
      <Link
        to='top'
        smooth={true}
        duration={700} 
        className='scroll'
      >
        <MdOutlineKeyboardDoubleArrowUp color='bisque'/>

      </Link>
  );
};

export default Scroll;
