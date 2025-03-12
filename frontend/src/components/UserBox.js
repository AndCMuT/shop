import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UserBox.css'

function UserBox() {

  const location = useLocation()
  const token = localStorage.getItem('token')

  if (token !== undefined) 
    return (<div className="UserBox">
      <Link className='linkRegLog' to="/PersonAcc">Личный кабинет</Link>
    </div>)


  else
  return (
  <div className="UserBox">
    <Link className='linkRegLog' to="/login" state={{background: location}}>Вход</Link>
    <Link className='linkRegLog' to="/registration" state={{background: location}}>Регистрация</Link>
</div>)


}

export default UserBox;