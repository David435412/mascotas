// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Empresas from './Empresas';
import RegistroCliente from './RegistroCliente';
import RegistroEmpresa from './RegistroEmpresa';
import Cart from './Cart';
import ListaProductos from './ListaProductos';
import DetallesProducto from './Detalles_Producto';
import LoginForm from './Login';
import Footer from './Footer';

const App = () => { 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/login-form" element={<LoginForm />} />  
        <Route path="/registro-cliente" element={<RegistroCliente />} />
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/detalles-producto" element={<DetallesProducto />} />
      </Routes>
      <Footer/>

    </>
  );
};

export default App; 