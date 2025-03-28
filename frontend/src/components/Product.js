import React from 'react';
import './Product.css';



function Product({header, image, price, addToBasket}) {

  return (
    <div className="Product">
      <img src={image} alt='not work'/>
      <h1>{header}</h1>
      <p>{`${price} rub`}</p>
      <button type='button' onClick={addToBasket}>В корзину</button>
    </div>
  );
}

export default Product;