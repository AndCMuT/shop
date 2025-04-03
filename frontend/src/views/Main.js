import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
import AddProductCard from '../components/AddProductCard';


function Main() {

  const [products, setProducts] = useState([]) //Хук состояния для отображения товаров
  //Функция для проверки в локальном хранилище массива Basket, иначе могла выскакивать ошибка при переключении на пустую корзину
  const basketCheck = () => { 
    const basket = localStorage.getItem('Basket')
    if (!basket) //Если basket нет создаём в локальном хранилище пустой массив
      localStorage.setItem('Basket', JSON.stringify([]))
  }
  //Хук useEffect срабатывает один раз при монтировании объекта
  useEffect(() => {
    basketCheck() //Проверка корзины в локальном хранилище
    
    const api = 'http://localhost:9001/products' // Адрес бэк сервера

    fetch(api) //Запрос на сервер
    .then(result => result.json()) //Преобразуем ответ в формат json
    .then((result) => {
      console.log(result) //Проверяем в консоли ответ (можно убрать)
      setProducts(result.data) //Устанавливаем состояние, записываем в массив products результат запроса на сервер
    })

  }, []) //Второй параметр пустой массив, значит сработает один раз при первом рендере, если указать например products будет срабатывать каждый раз при его изменении
//Функция добавления товара в корзину
  const addToBasket = (product) => {
    const basket = JSON.parse(localStorage.getItem('Basket')) || [] //получаем корзину из локального хранилища
    const existingProduct = basket.find(item => item._id === product._id) //находим в корзине товар по id
    if (existingProduct) {
      existingProduct.quantity += 1 //Если товар найде добавляем к значению quantity +1 
    } else {
      basket.push({...product, quantity: 1}) //Если товар не найден добавляем в массив значение quantity со значением 1
    }
    localStorage.setItem('Basket', JSON.stringify(basket)) //Записываем в локальное хранилище обновлённую корзину
    // alert('Товар добавлен в корзину')
  }


  return (
    <>
    <div className="Main">
      {/* Перебираем массив product для каждого элемента создаём компонент Product и передаём в него пропсы */}
      {products.map((item) => 
      <Product 
      // Обязательный key для списка в React (уникальный id)
      key={ item._id } 
      header={item.header} 
      image={item.image} 
      price={item.price} 
      addToBasket = { () => addToBasket(item)} />
      )}
      {/* Компонент для добавления товара в БД */}
      <AddProductCard />
    </div>
    </>
  );
}

export default Main;