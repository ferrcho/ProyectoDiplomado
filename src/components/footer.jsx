import React from 'react'

const Footer = () => (
    <>
        <footer id="pie">
            <div className="infoDate">
                {/* <span>Terminos y condiciones </span>
                <span>glofoc@gmail.com </span>
                <span>5698741236</span> */}
                <nav class="nav">
                    <a class="nav-link active" aria-current="page" href="...">Terminos y condiciones</a>
                    <a class="nav-link disabled" href="...">Glofox@gmail.com</a>
                    <a class="nav-link disabled" href="...">5698741236</a>
                </nav>
            </div>
            <div className="btnInfo">
                <button className="btn btn-outline-info">Cambiar idioma</button>
            </div>
        </footer>
    </>
)

export default Footer
