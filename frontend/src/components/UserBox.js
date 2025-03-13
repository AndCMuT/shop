import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UserBox.css'

function UserBox() {

  const token = localStorage.getItem('token')
  const location = useLocation()
  // useEffect(() => {

  //   if (!token) {
  //     console.log("No token")
  //   }
  //   else {
  //     console.log(`Token find ${token}`)
  //   }    
  // }, [])


  if(!token) return (<div className="UserBox">
          <Link className='linkRegLog' to="/login" state={{background: location}}>Вход</Link>
          <Link className='linkRegLog' to="/registration" state={{background: location}}>Регистрация</Link>
    </div>)
  
   else return (
    <div className="UserBox">
      <Link className='linkPersonAcc' to="/PersonAcc">Личный кабинет</Link>
      <button className='linkRegLof' type='button' onClick={localStorage.removeItem('token')}>Выйти</button>
  </div>)

  






}

export default UserBox;