import React from 'react';
import './Modal.css'
import Button from '../Button/Button';
const Modal = ({ colorScheme, clickHandler }) => {
   return (
      <div id="modal-container"> 
        <div id='modal-placement'>
          <p id='modal-words'>Thank You For Reviewing My Submission</p>
          <div id="modal-button-container">
        <Button colorScheme={colorScheme} clickHandler={clickHandler} buttonText={"CLOSE"}
        /></div>
        </div>
      </div>
   )}

export default Modal;