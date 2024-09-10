/* Header.js */
import React from 'react';
import {Link} from "react-router-dom";
import logo from "../img/FW_logo.jpg";

const Header = () => {
  return (
    <header>
      <div className='nav-head'>
            <div className='mainlogo'>
              <a href='/'>
                <img src={logo} width= '30px' />
              </a>
            </div>
            <div className='nav-middle'>
                <Link to="/">애견용품점</Link>
            </div>
            <ul>
                <li><Link to="/home">애견용품</Link></li>
                <li><Link to="/board">커뮤니티</Link></li>
                <li><Link to="/UserInfo">내정보</Link></li>
            </ul>
        </div>
        <hr/>
    </header>
  );
};

export default Header;