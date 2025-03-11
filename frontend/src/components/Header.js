import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import UserBox from './UserBox'

function Header({ setModalBox }) {
  return (
    <div className="Header">
      <ul>
      <Link to="/"><li>Главная</li></Link>
      <Link to="/PersonAcc"><li>Личный кабинет</li></Link>
      <Link to="/Basket"><li>Корзина</li></Link>  
      </ul>
      <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;