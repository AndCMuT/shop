import React from 'react';
import { Link } from 'react-router-dom';
import './UserBox.css'

function UserBox({setModalBox}) {
  return (
    <div className="UserBox">
      <Link>Вход</Link>
      <button onClick={() => setModalBox('Registration')}>Регистрация</button>
    </div>
  );
}

export default UserBox;