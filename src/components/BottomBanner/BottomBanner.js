import React, { useState, useEffect } from 'react';
import './BottomBanner.css'
import insta from '../../front-end-dev-test-assets/instagram.svg'
import face from '../../front-end-dev-test-assets/facebook.svg'
const BottomBanner = (props) => {
  return (
      <div id="bottom-banner-container"> 
          <div id="follow-us-wrapper">
            <p id="follow-us-paragraph">Follow Us:</p>
          </div>
        <div id="social-media-icon-container">
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