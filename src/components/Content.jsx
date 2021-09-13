import React from 'react'
import "../styles/index.css";
import propTypes from "prop-types";
import gym_1 from '../images/gym_1.jpg';
import gym_2 from '../images/gym_2.jpg';
import gym_3 from '../images/gym_3.jpeg';
import gym_4 from '../images/gym_4.jpg';
import gym_5 from '../images/gym_5.jpg';
import gym_6 from '../images/gym_6.jpg';
import gym_7 from '../images/gym_7.jpg';
import gym_8 from '../images/gym_8.jpg';

const Content = () => (
    <>
        <h2 className="catUno">Catalogo de gymnasios</h2>

        <section id="section">
            <article>
                <img src={gym_1} alt=".."></img>
                <span>El mejor gymnasio en la zona centro</span>
            </article>

            <article>
                <img src={gym_2} alt=".."></img>
                <span>El mas visitado</span>
            </article>

            <article>
                <img src={gym_3} alt=".."></img>
                <span>Reciente mente agregado</span>
            </article>
        </section>
        <aside id="columna" className="">
            <blockquote>
                <img src={gym_4} width="80%;" alt=".."></img>
            </blockquote>
            <blockquote>
                <img src={gym_5} width="80%;" alt=".."></img>
            </blockquote>
            <blockquote>
                <img src={gym_6} width="80%;" alt=".."></img>
            </blockquote>
            <blockquote>
                <img src={gym_7} width="80%;" alt=".."></img>
            </blockquote>
            <blockquote>
                <img src={gym_8} width="80%;" alt=".."></img>
            </blockquote>
            <blockquote>
                <img src={gym_1} width="80%;" alt=".."></img>
            </blockquote>
        </aside>
    </>
)

Content.propTypes = {
    image: propTypes.string
};

export default Content
