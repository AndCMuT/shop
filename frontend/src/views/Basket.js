import React, { useEffect, useState } from 'react';
import './Basket.css';
import ProductInBasket from '../components/ProductInBasket';
import BasketTotal from '../components/BasketTotal';

function Basket() {

  const [basket, setProducts] = useState([])
  

  useEffect (() => {

    const savedBasket = JSON.parse(localStorage.getItem('Basket') || [])
    setProducts(savedBasket)
    
  }, [])

  const removeFromBasket = (id) =>  {
    const updateBasket = basket.filter((item) => item._id !== id)
    setProducts(updateBasket)
    localStorage.setItem('Basket', JSON.stringify(updateBasket))
   }

  const downQuantity = (id) => {
    const product = basket.find(item => item._id === id)
    if (product.quantity === 1) {
      removeFromBasket(id)
    }else{
    product.quantity -= 1
    localStorage.setItem('Basket', JSON.stringify(basket))
    const updateQuantityBasket = JSON.parse(localStorage.getItem('Basket'))
    setProducts(updateQuantityBasket)
    }
  }

  const upQuantity = (id) => {
    const product = basket.find(item => item._id === id)
    product.quantity += 1
    localStorage.setItem('Basket', JSON.stringify(basket))
    const updateQuantityBasket = JSON.parse(localStorage.getItem('Basket'))
    setProducts(updateQuantityBasket)
  }
  
  
  // const totalSumOneProduct = (id) => {
  //   console.log(basket)
  //   const sum =[]
  //   const totalSum = basket.forEach((el) => {total = el.quantity*el.price 
  //     return totalSum})
  //   console.log(totalSum)
  // }
  // totalSumOneProduct()


  return (
    <div className="Basket">
      <h1>Корзина</h1>
      {basket.length === 0 ? 
        (<h2>Корзина пуста</h2>) :
      (<div className="BasketProductBlock">
        {basket.map((item) => 
        <ProductInBasket 
        key={item._id} 
        header={item.header} 
        price={item.price} 
        image={item.image} 
        removeFromBasket={ () => removeFromBasket(item._id)} 
        downQuantity={ () => downQuantity(item._id)}
        upQuantity={ () => upQuantity(item._id)}
        quantity={item.quantity}
        />
        )}
        <BasketTotal />
        </div>)}
    </div>
  );
}

export default Basket;