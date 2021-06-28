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
          <div id="topBannerButtonContainer">
          <Button colorScheme={'purpleButton'} buttonText={"Button Button"} makeModal1Visible={makeModal1Visible} makeModal1Invisible={makeModal1Invisible}/>
          </div>
          <img id="logoWhite"
            src={logoWhite}
          />
      </div>
   )}

export default TopBanner;