import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main.js';
import Footer from './components/Footer';
import Basket from './views/Basket.js';
import ModalBox from './components/ModalBox.js';
import Login from './components/Login.js';
import Registration from './components/Registration.js';


function App() {

  const[page, setPage] = useState('Main');
  const[modalBox, setModalBox] = useState('None');

  const pages = {
    Main: <Main />,
    Basket: <Basket />
  }

  const modalBoxes = {
    None: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>
  }

  return (
    <div className="App">
    <Header setPage={ setPage } setModalBox={setModalBox}/>
    {pages[page]}
    {modalBoxes[modalBox]}
    <Footer />
    </div>
  );
}

export default App;