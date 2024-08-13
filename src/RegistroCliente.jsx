import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';

const RegistroCliente = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-500">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Registro de Cliente</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            <FaUser className="inline-block mr-2 text-indigo-500" />
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            <FaEnvelope className="inline-block mr-2 text-indigo-500" />
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            <FaPhone className="inline-block mr-2 text-indigo-500" />
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            <FaLock className="inline-block mr-2 text-indigo-500" />
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistroCliente;
