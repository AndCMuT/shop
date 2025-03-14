import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './UserBox.css'

function UserBox() {

  const token = localStorage.getItem('token')
  const location = useLocation()
  const navigate = useNavigate()
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
      <Link className='linkRegLog' to="/PersonAcc">ЛК</Link>
      <button className='linkRegLog' type='button' onClick={() => {localStorage.removeItem('token') 
        navigate('/')
      }}>Выйти</button>
  </div>)

  






}

export default UserBox;