import React from 'react';
import { useNavigate } from 'react-router-dom';


function AddProductBox() {

  const navigate = useNavigate() //Хук для навигации по страницам

  function AddProduct(){
    
    const header = document.getElementById('header').value //Получаем значение input по id и записываем в переменную
    const price = document.getElementById('price').value
    const image = document.getElementById('image').value
    const data = { //Создаём объект из полученных значений
      header: header,
      price: price,
      image: image
    }
    console.log(data) //Проверка (можно убрать)
    
    const api = 'http://127.0.0.1:9001/addproduct' //адрес сервера

    fetch(api, {
      method: 'PUT', //только передаём данные на сервер
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) //Делаем из объекта строку
    })
    .then(result => result.json()) //Ответ от сервера
    .then((result) => {
      console.log(result) //Выводим в консоль ответ от сервера
      navigate('/') //Переходим на главную страницу
      window.location.reload() //Перезагружаем страницу
    })
  }

  return (
    <>
      <h1>Новый товар</h1>
      <input id='header' type='text' placeholder='Название товара' />
      <input id='price' type='text' placeholder='Цена' />
      <input id='image' type='text' placeholder='Путь к изображению (./img/picture.jpg)' />
      <button onClick={AddProduct}>Добавить</button>
    </>
  );
}

export default AddProductBox;