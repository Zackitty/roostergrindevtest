import React from 'react';
import Button from '../Button/Button'
import hero from '../../front-end-dev-test-assets/hero.jpg'
import logoWhite from '../../front-end-dev-test-assets/logo-white.svg'
import Modal from '../Modal/Modal';
import './TopBanner.css'

const TopBanner = ({makeModalVisible, makeModalInvisible, modalVisible}) => {
  
  return (
      <div id="top-banner-container"> 
        <div id='top-banner-image-wrapper'>
          <img id="top-banner-image"
            src={hero}
          />
        </div>
        <div id="logo-container">
          <div id='outline-letter-logo-wrapper'>
              <p id="outline-letter-logo">WELCOME TO</p>
            </div>
            <div id='thick-letter-logo-wrapper'>
              <p id="thick-letter-logo">ROOSTER GRIN</p>
            </div>
          </div>
          <div id="top-banner-button-wrapper">
            <Button colorScheme={'purple-button'} buttonText={"BUTTON BUTTON"} clickHandler={makeModalVisible}/>
          </div>
          <div id={'logo-white-wrapper'}>
            <img id="logo-white"
              src={logoWhite}
            />
          </div>
          { modalVisible && (<Modal colorScheme={'purple-button'} clickHandler={makeModalInvisible} />)}
      </div>
   )}

export default TopBanner;