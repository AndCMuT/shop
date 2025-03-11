import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import UserBox from './UserBox'

function Header({setPage, setModalBox}) {
  return (
    <div className="Header">
      <nav>
        <Link to="/" className='headerLink'>Главная</Link>
        <Link to="/PersonAcc" className='headerLink'>Личный кабинет</Link>
        <Link to="/Basket" className='headerLink'>Корзина</Link>  
      </nav>
      <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;