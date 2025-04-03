import React from 'react';
import './ModalBox.css';
import { useNavigate} from 'react-router-dom';


function ModalBox({ children }) {
//Пропс (свойство) children для генерации модальных окон из других компонентов
  const navigate = useNavigate()

  return (
    <>
      <div className="Echo" onClick={() => navigate(-1)}></div>
      <div className="ModalBox">
        {children}
      </div>
    </>
  );
}

export default ModalBox;