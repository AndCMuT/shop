import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import UserBox from './UserBox'

function Header() {

  return (
    <div className="Header">
      <nav>
        <Link to="/" className='headerLink'>Главная</Link>
        <Link to="/" className='headerLink'>Оплата и доставка</Link>
        <Link to="/" className='headerLink'>О нас</Link>    
        <Link to="/Basket" className='headerLink'>Корзина</Link>  
      </nav>
      <UserBox />
    </div>
  );
}

export default Header;