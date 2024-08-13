import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">OmegaPetShop</Link>
                <div className="space-x-4">
                    <Link to="/registro-tienda" className="text-white hover:text-gray-300">Registrar Tienda</Link>
                    <Link to="/registro-cliente" className="text-white hover:text-gray-300">Registrar Cliente</Link>
                    <Link to="/productos" className="text-white hover:text-gray-300">Ver Productos</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
