import React, { useEffect, useState } from 'react';
import './Basket.css';
import ProductInBasket from '../components/ProductInBasket';

function Basket() {

  const [products, setProducts] = useState([])

  useEffect (() => {

    // const api = 'http://localhost:9001/basket'

    // fetch(api)
    // .then(result => result.json())
    // .then((result) => {
    //   console.log(result)
    //   setProducts(result.data)
    // })

    const savedBasket = JSON.parse(localStorage.getItem('Basket') || [])
    setProducts(savedBasket)

  }, [])



  return (
    <div className="Basket">
      <h1>Корзина</h1>
      <div className="BasketProductBlock">{products.map((item) => <ProductInBasket key={item._id} header={item.header} price={item.price} image={item.image}/>)}</div>
    </div>
  );
}

export default Basket;