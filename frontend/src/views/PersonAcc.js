import React from 'react';
import './PersonAcc.css';

function PersonAcc() {





  return (
    <div className="PersonAcc">
      <h1>Личный кабинет</h1>
      <img src='/img/avatar.png' alt='personal avatar' className='avatar'></img>
      <form className='changeAvatar'>
      <input type='text' placeholder=''></input>
      <button type='button'>Изменить</button>
      </form>
      <h2>Личные данные</h2>
      <form>
        <label htmlFor='firstName'>Имя</label>
        <input id='firstName' type='text' placeholder=''></input>
        <label htmlFor='lastName'>Фамилия</label>
        <input id='lastName' type='text' placeholder=''></input>
        <label htmlFor='email'>email</label>
        <input id='email' type='email' placeholder=''></input>
        <button type='button'>Сохранить</button>
      </form>
    </div>
  );
}

export default PersonAcc;