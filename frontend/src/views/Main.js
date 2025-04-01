import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
import AddProductCard from '../components/AddProductCard';




function Main() {

  const [products, setProducts] = useState([])
  const basketCheck = () => {
    const basket = localStorage.getItem('Basket')
    if (!basket)
      localStorage.setItem('Basket', JSON.stringify([]))
  }
  
  useEffect(() => {
    basketCheck()
    const api = 'http://localhost:9001/products'

    fetch(api)
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      setProducts(result.data)
    })

  }, [])

  const addToBasket = (product) => {
    const basket = JSON.parse(localStorage.getItem('Basket')) || []
    const existingProduct = basket.find(item => item._id === product._id)
    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      basket.push({...product, quantity: 1})
    }
    localStorage.setItem('Basket', JSON.stringify(basket))
    // alert('Товар добавлен в корзину')
  }


  return (
    <>
    <div className="Main">
      {products.map((item) => 
      <Product 
      key={ item._id } 
      header={item.header} 
      image={item.image} 
      price={item.price} 
      id={item._id}
      addToBasket = { () => addToBasket(item)} />
      )}
      <AddProductCard />
    </div>
    </>
  );
}

export default Main;