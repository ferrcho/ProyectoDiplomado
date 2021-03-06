import React from 'react'
import propTypes from "prop-types";
import "../styles/index.css";

const Header = ({ image }) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={image} alt="..." className="logo"></img>
                <span className="navbar-brand">Bienvenidos a Glofox</span>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="...">Inicio de sesion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="...">Registro</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
)

Header.propTypes = {
    image: propTypes.string
};

export default Header
