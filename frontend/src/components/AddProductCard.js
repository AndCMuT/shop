import React from 'react';
import './AddProductCard.css';
import { Link, useLocation } from 'react-router-dom';



function AddProductCard() {
  const location = useLocation()
  return (
    <div className="AddProductCard">
      <h1>Добавить товар</h1>
      <Link className='linkAdd' to='/add_product_box'state={{background: location}}>Новый товар</Link>
    </div>
  );
}

export default AddProductCard;