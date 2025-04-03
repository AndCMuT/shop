import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './UserBox.css'

function UserBox() {
//Компонент с кнопками для регистрации, авторизации, ЛК, выйти
  const token = localStorage.getItem('token') //Получаем токен
  const location = useLocation() //Хук для определения местоположения пользователя
  const navigate = useNavigate() //Хук для навигации по страницам
//Если токена нет то отображаются кнопки войти и регистрация
  if(!token) return (<div className="UserBox">
          <Link className='linkRegLog' to="/login" state={{background: location}}>Вход</Link>
          <Link className='linkRegLog' to="/registration" state={{background: location}}>Регистрация</Link>
    </div>)
  //Если токен есть то отображается ЛК и выйти
   else return (
    <div className="UserBox">
      <Link className='linkRegLog' to="/PersonAcc">ЛК</Link>
      {/* При нажатии на кнопку выйти удаляется токен и переходим на главную страницу */}
      <button className='linkRegLog' type='button' onClick={() => {localStorage.removeItem('token') 
        navigate('/')
      }}>Выйти</button>
  </div>)

  



}

export default UserBox;