import React from 'react';
import './ModalBox.css';

function ModalBox({setModalBox, children}) {
  return (
    <>
      <div className="Echo" onClick={() => setModalBox('None')}></div>
      <div className="ModalBox">
        {children}
      </div>
    </>
  );
}

export default ModalBox;