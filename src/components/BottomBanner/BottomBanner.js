import React, { useState, useEffect } from 'react';
import './BottomBanner.css'


const BottomBanner = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id="bottomBannerWrapper"> 
          <div id="follUsDiv">
            <p id="followUs">Follow Us:</p>
          </div>
        <div id="socialMediaIcons">
         <img
            source={require('../../front-end-dev-test-assets/facebook.svg')}
          />
        <img
            source={require('../../front-end-dev-test-assets/instagram.svg')}
          />
          </div>
      </div>
   )}

export default BottomBanner;