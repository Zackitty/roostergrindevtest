import React, { useState, useEffect } from 'react';
import Button from '../Button/Button'
import hero from '../../front-end-dev-test-assets/hero.jpg'
import logoWhite from '../../front-end-dev-test-assets/logo-white.svg'
import './TopBanner.css'

const TopBanner = ({makeModal1Visible, makeModal1Invisible}) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id="topBannerId"> 
        <div id='topBannerImageContainer'>
          <img id="topBannerImage"
            src={hero}
          />
          </div>
          <div id="bigLogoContainer">
            <div id='outlineLetterLogoContainer'>
              <p id="outlineLetterLogo">WELCOME TO</p>
            </div>
            <div id='thickLetterLogoContainer'>
              <p id="thickLetterLogo">ROOSTER GRIN</p>
            </div>
          </div>
          <div id="topBannerButtonContainer">
          <Button colorScheme={'purpleButton'} buttonText={"BUTTON BUTTON"} makeModal1Visible={makeModal1Visible} makeModal1Invisible={makeModal1Invisible}/>
          </div>
          <div id={'logoWhiteContainer'}>
            <img id="logoWhite"
            src={logoWhite}
          />
          </div>
      </div>
   )}

export default TopBanner;