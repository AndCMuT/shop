import React, { useEffect, useState } from 'react';
import './Basket.css';
import ProductInBasket from '../components/ProductInBasket';

function Basket() {

  const [products, setProducts] = useState([])

  useEffect (() => {

    const api = 'http://localhost:9001/basket'

    fetch(api)
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      setProducts(result.data)
    })
  }, [])



  return (
    <div className="Basket">
      <h1>Корзина</h1>
      {products.map((item) => <ProductInBasket key={item._id} header={item.header} price={item.price} image={item.image}/>)}
    </div>
  );
}

export default Basket;