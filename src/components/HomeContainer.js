import React, { useState } from 'react';
import './HomeContainer.css'
import TopBanner from './TopBanner/TopBanner';
import SecondRowContainer from './SecondRow/SecondRowContainer';
import ThirdRowBanner from './ThirdRow/ThirdRowBanner/ThirdRowBanner';
import FourthRowContainer from './FourthRow/FourthRowContainer';
import FifthRowBanner from './FifthRow/FifthRowBanner/FifthRowBanner';
import SixthRowContainer from './SixthRow/SixthRowContainer';
import BottomBanner from './BottomBanner/BottomBanner';

const HomeContainer = (props) => {
  
  const [modalVisible, setModalVisible] = useState(false);

  
  const makeModalVisible = function(){
    setModalVisible(true)
  }
  const makeModalInvisible = function(){
    setModalVisible(false)
  }
  
  
  
  return (
      <div id='home-container'> 
        <div id="home-top-banner-wrapper">
          <TopBanner makeModalVisible={makeModalVisible} makeModalInvisible={makeModalInvisible} modalVisible={modalVisible} />
        </div>
        <div id="home-second-row-wrapper">
          <SecondRowContainer />
        </div>
        <div id="home-third-row-wrapper">
          <ThirdRowBanner makeModalVisible={makeModalVisible} makeModalInvisible={makeModalInvisible} modalVisible={modalVisible}/>
        </div>
        <div id="home-fourth-row-wrapper">
          <FourthRowContainer />
        </div>
        <div id="home-fifth-row-wrapper">
          <FifthRowBanner makeModalVisible={makeModalVisible} makeModalInvisible={makeModalInvisible} modalVisible={modalVisible} />
        </div>
        <div id="home-sixth-row-wrapper">
          <SixthRowContainer />
        </div>
        <div id="home-bottom-row-wrapper">
          <BottomBanner />
        </div>
      </div>
   )}

export default HomeContainer;