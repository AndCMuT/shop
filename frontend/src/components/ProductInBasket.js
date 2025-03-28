import React from 'react';
import './ProductInBasket.css';



function ProductInBasket({header, image, price, removeFromBasket, quantity, downQuantity, upQuantity}) {


  return (
    <div className="ProductInBasket">
      <img src={image} alt='product'/>
      <h2>{header}</h2>
      <div className='quantityBlock'>
        <button className='upDownButton' type='button' onClick={upQuantity}>+</button>
        <p>{`${quantity} шт`}</p>
        <button className='upDownButton' type='button' onClick={downQuantity}>-</button>
      </div>
      <p>{`${price} rub`}</p>
      <button type='button' onClick={removeFromBasket}>Удалить</button>

    </div>
  );
}

export default ProductInBasket;