// App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import RegistroTienda from './RegistroTienda';
import RegistroCliente from './RegistroCliente';
import ListaProductos from './ListaProductos';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro-tienda" element={<RegistroTienda />} />
        <Route path="/registro-cliente" element={<RegistroCliente />} />
        <Route path="/productos" element={<ListaProductos />} />
      </Routes>
    </>
  );
};

export default App;
