import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import UserBox from './UserBox'

function Header({ setModalBox }) {
  return (
    <div className="Header">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/Basket">Личный кабинет</Link></li>
        <li><Link to="/PersonAcc">Корзина</Link></li>  
      </ul>
      <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;