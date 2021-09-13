import React from 'react'
import "../styles/index.css";

const Content = () => (
    <>
        <h2 class="catUno">Catalogo de gymnasios</h2>

        <section id="section">
            <article>
                <img src="img/gym_1.jpg" width="50%"></img>
                <span>El mejor gymnasio en la zona centro</span>
            </article>

            <article>
                <img src="img/gym_2.jpg" width="50%"></img>
                <span>El mas visitado</span>
            </article>

            <article>
                <img src="img/gym_3.jpeg" width="50%"></img>
                <span>Reciente mente agregado</span>
            </article>
        </section>
        <aside id="columna">
            <blockquote>
                <img src="img/gym_4.jpg" width="80%;"></img>
            </blockquote>
            <blockquote>
                <img src="img/gym_5.jpg" width="80%;"></img>
            </blockquote>
            <blockquote>
                <img src="img/gym_6.jpg" width="80%;"></img>
            </blockquote>
            <blockquote>
                <img src="img/gym_7.jpg" width="80%;"></img>
            </blockquote>
            <blockquote>
                <img src="img/gym_8.jpg" width="80%;"></img>
            </blockquote>
            <blockquote>
                <img src="img/gym_2.jpg" width="80%;"></img>
            </blockquote>
        </aside>
    </>
)

export default Content
