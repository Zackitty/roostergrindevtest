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
      <div>
      <SecondRowContainer />
      </div>
      <div>
      <ThirdRowBanner />
      </div>
      <div>
      <FourthRowContainer />
      </div>
      <div>
      <FifthRowBanner />
      </div>
        <div>
        <SixthRowContainer />
        </div>
        <div >
          <BottomBanner />
        </div>
        
      </div>
   )}

export default HomeWrapper;