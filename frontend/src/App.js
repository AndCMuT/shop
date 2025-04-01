import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Main from './views/Main.js';
import Footer from './components/Footer';
import Basket from './views/Basket.js';
import ModalBox from './components/ModalBox.js';
import Login from './components/Login.js';
import Registration from './components/Registration.js';
import PersonAcc from './views/PersonAcc.js';
import AddProductBox from './components/AddProductBox.js';
import OrderForm from './components/OrderForm.js';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {

  const location = useLocation()
  const background = location.state?.background

  return (
  <>
      <Header />
      <Routes location={ background || location }>

          <Route path='/' element={<Main />} />
          <Route path='/Basket' element={<Basket />}>

          </Route>
          <Route path='/PersonAcc' element={<PersonAcc />} />
        </Routes>
    
      {background && ( 
        <Routes>
          <Route path='/login' element={<ModalBox><Login /></ModalBox>} />
          <Route path='/registration' element={ <ModalBox> <Registration /> </ModalBox>} />
          <Route path='/add_product_box' element={ <ModalBox><AddProductBox/></ModalBox> } />
          <Route path='/order_form' element={<ModalBox><OrderForm/></ModalBox>} />
        </Routes>
      )}

      <Footer />
  </>
  );
}

export default App;