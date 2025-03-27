import React from 'react';
import './ProductInBasket.css';



function ProductInBasket({header, image, price, id}) {

  const api = 'http://localhost:9001/toBasket'
  
  function toBasket() {
    const productId = {id}
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productId)
    })
    .then(result => result.json())
    .then((result) => console.log(result))
  }

  return (
    <div className="ProductInBasket">
      <img src={image} alt='product'/>
      <h1>{header}</h1>
      <p>{`${price} rub`}</p>
      <button type='button' onClick={toBasket}>Удалить</button>
    </div>
  );
}

export default ProductInBasket;