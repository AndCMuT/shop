import React from 'react';
import './Product.css';



function Product({header, image, price, addToBasket}) {

  return (
    <div className="Product">
      <img src={image} alt='not work'/>
      <h2>{header}</h2>
      <p>{`${price} rub`}</p>
      <button type='button' onClick={addToBasket}>В корзину</button>
    </div>
  );
}

export default Product;