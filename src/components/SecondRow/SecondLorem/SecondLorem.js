import React, { useState, useEffect } from 'react';
import './SecondLorem.css'

const SecondLorem = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id='secondLoremWrapper'> 
         <div id='secondLoremSquare'>
         <div>
            <p id="secondLoremTitle">LOREM IPSUM</p>
         </div>
         <div id="secondLoremParagraphContainer">
            <p>
            Loremn ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna
            est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante,
            in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam
            Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet
            sed, quisque risus vitae semper duis feugiat.
            </p>
         </div>
         <div>
            <p id="loremLink"> > Lorem Ipsum</p>
         </div>
         </div>
      </div>
   )}

export default SecondLorem;