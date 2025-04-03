import React, { useEffect, useState } from 'react';
import './PersonAcc.css';



function PersonAcc() {

  const api = 'http://localhost:9001/personAcc' //Адрес сервера
  const token = localStorage.getItem('token') //Получаем из локального хранилища токен
  const [user, setUser] = useState({firstName: '', lastName: '', email: ''}) //Хук состояния


  useEffect(() => {
    if (!token) { //Проверка авторизован ли пользователь (есть токен или нет)
      console.error('Пользователь не авторизован!')
      return
    }

    fetch(api, { //Запрос к серверу, на получение данных о пользователе для заполнения полей имеющимися данными о пользователе
      method: 'POST', //Отправляем и получаем
      headers: {
        Authorization: `Bearer ${token}`, //Передаём токен в заголовке
        'Content-Type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((result) => {
      if (result.data) { //Если получен ответ
        setUser({
          firstName: result.data.firstName || '', //То устанавливаем значения в состоянии
          lastName: result.data.lastName || '',
          email: result.data.email || ''
        })
      } else {
        console.error('Ошибка: ', result.message) //Если ошибка то выводим её
      }  
    })
    .catch((err) => console.error("Ошибка запроса: ", err)) //Если произошла ошибка в запросе
  }, [token]) //Хук будет зависит от токена


//Функция обновления данных о пользователе
  const updatePerson = () =>
  {
    if (!token) {
      console.error('Нет токена!') //Проверяем токен
      return
    }
//Объект с данными
    const userData = { 
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }
  fetch(api, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`, //Отправляем токен на сервер
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData) //отправляем данные пользователя на сервер
  })
  .then((res) => res.json())
  .then((result) => {
    if (result.message === 'Данные обновлены') {
      console.log('Успешно обновлены', result.user)
    }
    else {
      console.error('Ошибка', result.message)
    }
    })
  .catch((err) => console.error('Ошибка запроса', err))
  }

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
        {/* Здесь в значение value получаем из объекта, onChange срабатывает при изменении текста и записываем полученный текст в объект и обновляя только конкретное свойство */}
        <input id='firstName' type='text' value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value })}></input>
        <label htmlFor='lastName'>Фамилия</label>
        <input id='lastName' type='text' value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value })}></input>
        <label htmlFor='email'>email</label>
        <input id='email' type='email'value={user.email} onChange={(e) => setUser({...user, email: e.target.value })}></input>
        {/* Кнопке передаём функцию для изменения данных пользователя которая сработает при нажатии (onClick) */}
        <button type='button' onClick={updatePerson}>Сохранить</button>
      </form>
    </div>
  );
}

export default PersonAcc;