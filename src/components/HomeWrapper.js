import React, { useState, useEffect } from 'react';
import './HomeWrapper.css'
import TopBanner from './TopBanner/TopBanner';
import SecondRowContainer from './SecondRow/SecondRowContainer';
import ThirdRowBanner from './ThirdRow/ThirdRowBanner/ThirdRowBanner';
import FourthRowContainer from './FourthRow/FourthRowContainer';
import FifthRowBanner from './FifthRow/FifthRowBanner/FifthRowBanner';
import SixthRowContainer from './SixthRow/SixthRowContainer';
import BottomBanner from './BottomBanner/BottomBanner';
const HomeWrapper = (props) => {
  

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  
  useEffect(() => {
  
  },[])

  const makeModal1Visible = function(){
    setModal1Visible(modal1Visible)
    console.log("this worked")
  }
  const makeModal1Invisible = function(){
    setModal1Visible(!modal1Visible)
  }
  const makeModal2Visible = function(){
    setModal2Visible(modal2Visible)
  }
  const makeModal2Invisible = function(){
    setModal2Visible(!modal2Visible)
  }
  
  
  return (
      <div id='homeWrapper'> 
      <div id="topBannerContainer">
      <TopBanner makeMdal1Visible={makeModal1Visible} makeModal1Invisible={makeModal1Invisible} />
      </div>
      <div id="secondRowContainer">
      <SecondRowContainer />
      </div>
      <div id="thirdRowContainer">
      <ThirdRowBanner />
      </div>
      <div id="fourthRowContainer">
      <FourthRowContainer />
      </div>
      <div id="fifthRowContainer">
      <FifthRowBanner />
      </div>
      <div id="sixthRowContainer">
        <SixthRowContainer />
        </div>
        <div id="bottomRowContainer">
          <BottomBanner />
        </div>
        
      </div>
   )}

export default HomeWrapper;