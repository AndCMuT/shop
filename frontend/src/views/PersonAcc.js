import React, { useEffect, useState } from 'react';
import './PersonAcc.css';


function PersonAcc() {

  const api = 'http://localhost:9001/personAcc'
  const token = localStorage.getItem('token')
  const [user, setUser] = useState({firstName: '', lastName: '', email: ''})
  useEffect(() => {
    if (!token) {
      console.error('Пользователь на авторизован!')
      return
    }

    fetch(api, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((result) => {
      if (result.data) {
        setUser(result.data)
      } else {
        console.error('Ошибка: ', result.message)
      }  
    })
    .catch((err) => console.error("Ошибка запроса: ", err))
  
  }, [])



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
        <input id='firstName' type='text' value={user.login}></input>
        <label htmlFor='lastName'>Фамилия</label>
        <input id='lastName' type='text' placeholder={user.lastName}></input>
        <label htmlFor='email'>email</label>
        <input id='email' type='email'value={user.email} onChange={(e) => setUser({...user, email: e.target.value })}></input>
        <button type='button'>Сохранить</button>
      </form>
    </div>
  );
}

export default PersonAcc;