import React  from 'react';
import './ThirdRowBanner.css'
import Button from '../../Button/Button'
import img from '../../../front-end-dev-test-assets/banner-1.jpg'
import Modal
 from '../../Modal/Modal';
const ThirdRowBanner = ({makeModalVisible, makeModalInvisible, modalVisible}) => {
  


  return (
      <div id='third-row-banner-outer-container'> 
         <div id='third-banner-inner-container'> 
            <p id="third-row-lorem">Lorem Ipsum</p>
            <div id="third-row-banner-button-container">
               <Button colorScheme={"orange-button"} buttonText={"BUTTON BUTTON"} clickHandler={makeModalVisible}/>
            </div>
         </div>
         <img id="third-row-banner-img" src={img} />
         { modalVisible && (<Modal colorScheme={'orange-button'} clickHandler={makeModalInvisible} />)}
      </div>
   )}

export default ThirdRowBanner;