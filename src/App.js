import React from 'react'
import Header from './components/header';
import Carousel  from './components/Carousel';
import Content from './components/Content';
import Footer from './components/footer';
import "./styles/index.css";
import logo from '../src/images/logo.jpg';

function App() {
  return (
    <div className="container">
      <Header
      image={logo}
      />
      <h1 className="title">Glofox</h1>
      <p className="parafoP card-text text-secondary">Es un innovador software de gestión de gimnasios. Permitiendo a las empresas de fitness retener y generar ingresos</p>
      <Carousel/>
      <hr></hr>
      <Content/>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App
