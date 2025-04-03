import React from 'react';
import './BasketTotal.css';
import { Link, useLocation } from 'react-router-dom';



function BasketTotal() {
 
  const location = useLocation() //Используем хук для модального окна, чтоб страница корзины осталась на фоне при оформлении заказа
  const basket = JSON.parse(localStorage.getItem('Basket') || []) //Парсим локальное хранилище получаем корзину если нет, то пустой массив
//Функция для получения количества товаров в корзине
  const totalProductInBasket = () => {
    const totalProduct = basket.reduce((total, item) => total + item.quantity, 0) //Метод reduce используется для сворачивания массива в одно значение, то есть от каждого значения берём количество (quantity) и прибавляем к общему (total)
    return totalProduct
  }
//Функция для получения суммы всех товаров
  const totalSum = () => {
    const totalPrice = basket.reduce((total, item) => total + item.price*item.quantity, 0) //Тоже самое что в предыдущей функции только с умножением на цену товара
    return totalPrice
  }


  return (
    <div className="TotalBasket">
      <h2>Ваша корзина</h2>
      {/* Функции возвращают значения, обернул их в тег span для выделения стилем (css) */}
      <p>Всего: <span className="sumProduct">{totalProductInBasket()}</span> товаров, на сумму: <span className="sumProduct">{totalSum()}</span> rub</p>
      {/* Ссылка для модального окна оформления заказа */}
      <Link className='linkOrder' to={`/order_form`} state={{background: location}}>Оформить заказ</Link>
    </div>
  );
}

export default BasketTotal;