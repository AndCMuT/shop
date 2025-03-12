import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UserBox.css'

function UserBox() {

  const location = useLocation()

  return (
    <div className="UserBox">
      <Link to="/login" state={{background: location}}>Вход</Link>
      <Link to="/registration" state={{background: location}}>Регистрация</Link>
    </div>
  );
}

export default UserBox;