import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

const navigate = useNavigate()

    function Log() {
      
      const login = document.getElementById('login').value
      const password = document.getElementById('password').value
      const data = {
        login: login,
        password: password
      }
      console.log(data)

      const api = 'http://localhost:9001/login'

      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(result => result.json())
      .then((result) => {
        console.log(result)
        localStorage.setItem('token', result.token)
        console.log(result.token)
        if(result.token !== undefined)
          navigate(-1)
        else
          {alert("Не верный логин или пароль")}
      })
    }

  return (
    <>
        <h1>Вход</h1>
        <input id='login' type='text' placeholder='login' />
        <input id='password' type='password' placeholder='password' />
        <button onClick={ Log }>Войти</button>
    </>
  );
}

export default Login;