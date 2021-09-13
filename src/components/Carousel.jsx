import React from 'react'
import "../styles/index.css";
import car from '../images/corusel_1.jpg';
import car2 from '../images/corusel_2.jpg';
import car3 from '../images/corusel_3.jpg';

const Carousel = () => (
    <>
        <div className="carousel_tam">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={car} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={car2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={car3} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Carousel
