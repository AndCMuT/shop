import React from 'react';
import './BasketTotal.css';



function BasketTotal() {


  return (
    <div className="TotalBasket">
      <h2>Ваша корзина</h2>
      <p>товаров </p>
      <p>на сумму</p>
      <button type='button'>Оформить заказ</button>
    </div>
  );
}

export default BasketTotal;