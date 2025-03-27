import React from 'react';
import './Product.css';



function Product({header, image, price, id, addToBasket}) {

  // const api = 'http://localhost:9001/toBasket'
  
  // function toBasket() {
  //   const productId = {id}
  //   fetch(api, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(productId)
  //   })
  //   .then(result => result.json())
  //   .then((result) => console.log(result))
  // }

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