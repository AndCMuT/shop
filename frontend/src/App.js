import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

  // const[page, setPage] = useState('Main');
  const[modalBox, setModalBox] = useState('None');

  // const pages = {
  //   Main: <Main />,
  //   Basket: <Basket />,
  //   PersonAcc: <PersonAcc />
  // }

  const modalBoxes = {
    None: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>
  }

  return (
    <div className="App">
      
      <Router>
        <Header setModalBox={setModalBox}/>
        <Routes>
          
          <Route path='/' element={<Main />} />
          <Route path='/Basket' element={<Basket />} />
          <Route path='/PersonAcc' element={<PersonAcc />} />

        </Routes>
        {modalBoxes[modalBox]}
        <Footer />
      </Router>

    </div>
  );
}

export default App;