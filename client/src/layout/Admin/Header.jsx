import React from 'react'
import "./Header.css"
import { FaLaughWink } from 'react-icons/fa';
import { BsSpeedometer2 } from 'react-icons/bs';
import { RiSettings4Fill } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';
import { AiFillTool } from 'react-icons/ai';
import { AiFillFolder } from 'react-icons/ai';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaTable } from 'react-icons/fa';
import { AiFillLeftCircle } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <div className="admin__navbar">
        <div className="admin__navbar__hero">
          <FaLaughWink style={{ fontSize: "33px" }} /> <h3>SB ADMIN</h3>
        </div>
        <div className="line"></div>
        <div className="admin__navbar__dash">
          <BsSpeedometer2 style={{ fontSize: "17px" }} /> <h6>  <Link to="/admin">Dashboard Page </Link> </h6>
        </div>
        <div className="admin__navbar__dash">
          <BsCoin style={{ fontSize: "17px" }} /> <h6> <Link to="/admin/coins">Coins Page</Link> </h6>
        </div>
        <div className="line"></div>
        <div className="admin__navbar__interface">
          <span>INTERFACE</span>
          <div className="interface1">
            <RiSettings4Fill style={{textAlign:"center"}} /> <p>Components</p> <BiChevronRight style={{textAlign:"center"}}/>
          </div>
          <div className="interface1">
            <AiFillTool style={{textAlign:"center"}} /> <p>Utilities</p> <BiChevronRight style={{textAlign:"center"}}/>
          </div>
        </div>
        <div className="line"></div>
        <div className="admin__navbar__interface">
          <span>ADDONS</span>
          <div className="interface1">
            <AiFillFolder style={{textAlign:"center"}} /> <p>Pages</p> <BiChevronRight style={{textAlign:"center"}}/>
          </div>
          <div className="interface1">
            <AiOutlineAreaChart style={{textAlign:"center"}} /> <p>Charts</p> 
          </div>
          <div className="interface1">
            <FaTable style={{textAlign:"center"}} /> <p>Tables</p> 
          </div>
        </div>
        <div className="line"></div>
        <div className='circle'><AiFillLeftCircle/></div>







      </div>



    </>
  )
}

export default Header