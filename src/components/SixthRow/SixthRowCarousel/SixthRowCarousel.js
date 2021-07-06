import React, { useState } from 'react';
import './SixthRowCarousel.css'

const SixthRowCarousel = (props) => {
   const [index, setIndex] = useState(1);

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };

  
  return (
     <div id="sixth-row-carousel-container">
      <div id="my-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#my-carousel" data-slide-to="0" id='precious'class="active"></li>
          <li data-target="#my-carousel" data-slide-to="1" id='precious'></li>
          <li data-target="#my-carousel" data-slide-to="2" id='precious'></li>
        </ol>
        <div class="carousel-inner" id="carousel-new-inner">
          <div class="item active">
            <p id="john-doe">John Doe 08/08/2019</p>
            <p id="john-doe-content">Lorem ipsum dolor sit amet, et felis integer. Cras ac,
              duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante,
              in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna et sociis, neque in</p>
          </div>
          <div class="item">
            <p id="john-doe">John Doe 08/08/2019</p>
            <p id="john-doe-content">Lorem ipsum dolor sit amet, et felis integer. Cras ac,
              duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante,
              in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna et sociis, neque in</p>
          </div>
          <div class="item">
            <p id="john-doe">John Doe 08/08/2019</p>
            <p id="john-doe-content">Lorem ipsum dolor sit amet, et felis integer. Cras ac,
              duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante,
              in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna et sociis, neque in</p>
          </div>
        </div>
        <a class="left carousel-control" href="#my-carousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#my-carousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>
    </div>
  )}

export default SixthRowCarousel;