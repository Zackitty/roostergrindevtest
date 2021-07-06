import React from 'react';
import './FifthRowBanner.css'
import Button from '../../Button/Button'
import logo from "../../../front-end-dev-test-assets/banner-2.jpg"
import Modal from '../../Modal/Modal';
const FifthRowBanner = ({makeModalVisible, makeModalInvisible, modalVisible}) => {
  return (
         <div id='fifth-row-banner-outer-container'> 
            <div id='fifth-banner-inner-container'> 
               <div id='fifth-row-title-container'>
                  <p id="fifth-row-lorem-title">Lorem Ipsum</p>
               </div>
               <div id='fifth-row-paragraph-container'>
                  <p id="fifth-row-lorem-paragraph">
                     Lorem ipsum dolor sit amet, et felis integer.
                     Cras ac, duis nisl magna est sociis, neque in 
                     odio vel, sit lobortis erat. Fugit quam, ut pede
                     ut ant, in viverra eros dictum nisl ligula.
                  </p>
               </div>
               <div id="fifth-row-banner-button-container">
                  <Button clickHandler={makeModalVisible}colorScheme={"orange-button"} buttonText={"BUTTON BUTTON"}/>
               </div>
            </div>
            <img id="fifth-row-banner-img" src={logo} />
            {modalVisible && (<Modal colorScheme={'orange-button'} clickHandler={makeModalInvisible} />)}
         </div>
   )}

export default FifthRowBanner;