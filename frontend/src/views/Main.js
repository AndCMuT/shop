import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';




function Main() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const api = 'http://localhost:9001/products'

    fetch(api)
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      setProducts(result.data)
    })

  }, [])



  // function getProductList() {
  //   return products.map((item) => <Product key={ item.id } header={item.header} image={item.image} price={item.price}/>)
  // }

  return (
    <div className="Main">
      {products.map((item) => <Product key={ item._id } header={item.header} image={item.image} price={item.price}/>)}
    </div>
  );
}

export default Main;