import React from 'react';
import { useNavigate } from 'react-router-dom';


function Registration() {

  const navigate = useNavigate()
//Функция регистрации
  function Reg(){
   //Получаем значения из input по id 
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const data = {
      login: login,
      email: email,
      password: password
    }
    console.log(data)
    
    const api = 'http://127.0.0.1:9001/registration' //Адрес сервера

    fetch(api, {
      method: 'POST', //Метод POST возможно здесь можно использовать PUT 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) //Делаем из объекта строку
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      navigate(-1) //После успешной регистрации возвращаемся на страницу на которой были
    })
  }

  return (
    <>
      <h2>Регистрация</h2>
      <input id='login' type='text' placeholder='login' />
      <input id='email' type='email' placeholder='email' />
      <input id='password' type='password' placeholder='password' />
      <button onClick={Reg}>Отправить</button>
    </>
  );
}

export default Registration;