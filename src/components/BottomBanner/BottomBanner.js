import React, { useState, useEffect } from 'react';
import './BottomBanner.css'
import insta from '../../front-end-dev-test-assets/instagram.svg'
import face from '../../front-end-dev-test-assets/facebook.svg'
const BottomBanner = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id="bottomBannerWrapper"> 
          <div id="followUsDiv">
            <p id="followUsP">Follow Us:</p>
          </div>
        <div id="socialMediaIcons">
         <img id="bottomFacebook"
            src={face}
          />
        <img id="bottomInsta"
            src={insta}
          />
          </div>
      </div>
   )}

export default BottomBanner;