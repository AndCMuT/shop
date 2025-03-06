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
        <label htmlFor='name'>Имя</label>
        <input id='name' type='text' placeholder=''></input>
      </form>
    </div>
  );
}

export default PersonAcc;