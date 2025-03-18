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
          <Route path='/Basket' element={<Basket />} />
          <Route path='/PersonAcc' element={<PersonAcc />} />
        </Routes>
    
      {background && ( 
        <Routes>
          <Route path='/login' element={<ModalBox><Login /></ModalBox>} />
          <Route path='/registration' element={ <ModalBox> <Registration /> </ModalBox>} />
        </Routes>
      )}

      <Footer />
  </>
  );
}

export default App;