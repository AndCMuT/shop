import React from 'react';


function Registration() {

  function Reg(){
    
    // const name = document.getElementById('name').value
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const data = {
      // name: name,
      login: login,
      email: email,
      password: password
    }
    console.log(data)
    
    const api = 'http://127.0.0.1:9001/registration'

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
    })
  }

  return (
    <>
        <h1>Регистрация</h1>
        <input id='login' type='text' placeholder='login' />
        <input id='email' type='email' placeholder='email' />
        <input id='password' type='password' placeholder='password' />
        <button onClick={Reg}>Отправить</button>
    </>
  );
}

export default Registration;