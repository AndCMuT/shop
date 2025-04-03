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
    //Обернули в Router (BrowserRoute) для работы маршрутов в приложении
    <Router> 
      <AppContent />
    </Router>
  )
}

function AppContent() {

  const location = useLocation() //Хук считывает на какой странице находится пользователь в данный момент
  const background = location.state?.background // Достаёт background из state если он передан (?. - опциональная цепочка)

  return (
  <>
      <Header />
{/* Если background есть рендерит основные маршруты, как если бы оставались на той же странице */}
{/* Если background нет просто рендерит маршруты по location */}
      <Routes location={ background || location }> 
      {/* Маршруты */}
        <Route path='/' element={<Main />} />
        <Route path='/Basket' element={<Basket />}/>
        <Route path='/PersonAcc' element={<PersonAcc />} />
      </Routes>
{/* Если background был передан через state то модальные окна рендерит отдельно */}
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