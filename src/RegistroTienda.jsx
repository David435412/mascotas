import React, { useState } from 'react';
import { FaStore, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';

const RegistroTienda = () => {
    const [formData, setFormData] = useState({
        nombreTienda: '',
        email: '',
        telefono: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Registro de Tienda</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        <FaStore className="inline-block mr-2" />
                        Nombre de la Tienda
                    </label>
                    <input
                        type="text"
                        name="nombreTienda"
                        value={formData.nombreTienda}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        <FaEnvelope className="inline-block mr-2" />
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        <FaPhone className="inline-block mr-2" />
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        <FaLock className="inline-block mr-2" />
                        Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700"
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default RegistroTienda;
