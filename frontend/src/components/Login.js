import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

const navigate = useNavigate()
// Функция авторизации
    function Log() {
      
      const login = document.getElementById('login').value //Получаем логин по id
      const password = document.getElementById('password').value //Получаем пароль 
      const data = { //Делаем объект из полученных данных
        login: login,
        password: password
      }
      console.log(data) //Проверяем полученный объект (выводим в консоль)

      const api = 'http://localhost:9001/login' //api сервера

      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //отправляем данные на сервер
      })
      .then(result => result.json())
      .then((result) => {
        console.log(result)
        localStorage.setItem('token', result.token) //Получаем токен записываем в локальное хранилище
        console.log(result.token)
        if(result.token !== undefined) //Если токен получен возвращаемся на одну страницу назад
          navigate(-1)
        else
          {alert("Не верный логин или пароль")} //Если авторизация не прошла сообщение о неверности введённых данных
      })
    }

  return (
    <>
        <h2>Вход</h2>
        <input id='login' type='text' placeholder='login' />
        <input id='password' type='password' placeholder='password' />
        <button onClick={ Log }>Войти</button>
    </>
  );
}

export default Login;