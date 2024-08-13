import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <h1 className="text-5xl font-bold text-white mb-8">Bienvenido a OmegaPetShop</h1>
            <p className="text-white text-lg mb-8">Tu tienda de confianza para todo lo que tu mascota necesita.</p>
            <div className="flex space-x-4">
                <Link to="/registro-cliente" className="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600">
                    Registrar Cliente
                </Link>
                <Link to="/registro-tienda" className="bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-600">
                    Registrar Tienda
                </Link>
            </div>
        </div>
    );
};

export default Home;
