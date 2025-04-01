import React from 'react';
import { useNavigate } from 'react-router-dom';


function AddProductBox() {

  const navigate = useNavigate()

  function AddProduct(){
    
    const header = document.getElementById('header').value
    const price = document.getElementById('price').value
    const image = document.getElementById('image').value
    const data = {
      header: header,
      price: price,
      image: image
    }
    console.log(data)
    
    const api = 'http://127.0.0.1:9001/addproduct'

    fetch(api, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      navigate('/')
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