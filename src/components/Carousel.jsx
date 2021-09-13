import React from 'react'
import "../styles/index.css";
import car from '../images/corusel_1.jpg';
import car2 from '../images/corusel_2.jpg';
import car3 from '../images/corusel_3.jpg';

const Carousel = () => (
    <>
        <div className="carousel_tam">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={car} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={car2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={car3} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Carousel
