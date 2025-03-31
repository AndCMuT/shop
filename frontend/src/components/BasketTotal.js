import React from 'react';
import './BasketTotal.css';



function BasketTotal() {

  const basket = JSON.parse(localStorage.getItem('Basket') || [])

  const totalProductInBasket = () => {
    const totalProduct = basket.reduce((total, item) => total + item.quantity, 0)
    return totalProduct
  }

  const totalSum = () => {
    const totalPrice = basket.reduce((total, item) => total + item.price*item.quantity, 0)
    return totalPrice
  }


  return (
    <div className="TotalBasket">
      <h2>Ваша корзина</h2>
      <p>Всего: <span className="sumProduct">{totalProductInBasket()}</span> товаров, на сумму: <span className="sumProduct">{totalSum()}</span> rub</p>
      <button type='button'>Оформить заказ</button>
    </div>
  );
}

export default BasketTotal;