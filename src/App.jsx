// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import RegistroCliente from './RegistroCliente';
import RegistroEmpresa from './RegistroEmpresa';
import ListaProductos from './ListaProductos';
import LoginForm from './Login';
import Footer from './Footer';

const App = () => { 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-form" element={<LoginForm />} />  
        <Route path="/registro-cliente" element={<RegistroCliente />} />
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
        <Route path="/productos" element={<ListaProductos />} />
      </Routes>
      <Footer/>

    </>
  );
};

export default App; 