import React, { useEffect, useState } from 'react';
import './Basket.css';
import ProductInBasket from '../components/ProductInBasket';
import BasketTotal from '../components/BasketTotal';

function Basket() {

  const [basket, setProducts] = useState([])//Хук состояния для наполнения корзины

  useEffect (() => {

    const savedBasket = JSON.parse(localStorage.getItem('Basket') || []) //Получаем из локального хранилища массив с товарами
    setProducts(savedBasket) //Записываем в состояние
    
  }, [])
//Функция удаления товара из корзины
  const removeFromBasket = (id) =>  {
    const updateBasket = basket.filter((item) => item._id !== id)
    setProducts(updateBasket)
    localStorage.setItem('Basket', JSON.stringify(updateBasket))
   }
//Функция уменьшения количества товара в корзине
  const downQuantity = (id) => {
    const product = basket.find(item => item._id === id) //Находим товар
    if (product.quantity === 1) {
      removeFromBasket(id) //Если количество товара равно одному удаляем из корзины
    }else{
    product.quantity -= 1 //Иначе значение quantity уменьшаем на 1
    localStorage.setItem('Basket', JSON.stringify(basket)) //Записываем в Basket
    const updateQuantityBasket = JSON.parse(localStorage.getItem('Basket')) //Получаем обновлённый массив корзины 
    setProducts(updateQuantityBasket) //Обновляем состояние 
    } //Эту функцию можно упростить? Пока не знаю, но тут как будто налепил лишнего.
  }
//Функция увелечения товара в корзине, работает по такому же принципу как и предыдущая 
  const upQuantity = (id) => {
    const product = basket.find(item => item._id === id)
    product.quantity += 1
    localStorage.setItem('Basket', JSON.stringify(basket))
    const updateQuantityBasket = JSON.parse(localStorage.getItem('Basket'))
    setProducts(updateQuantityBasket)
  }

  return (
    <div className="Basket">
      <h1>Корзина</h1>
      {/* Если длина массива basket равна нулю то выведется заголовок о пустой корзине, если нет то также как в main проходимся по каждому элементу массива и передаём пропсы в компонент ProductInBasket */}
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
        {/* Компонент для отображения суммарной информации о корзине */}
        <BasketTotal />
        </div>)}
    </div>
  );
}

export default Basket;