// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const productos = [
    { id: 1, nombre: 'Alimento para perros', categoria: 'Alimentos', tienda: 'PetStore1', precio: 10000, imagen: 'https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/1/1/111100003_ed-min_1.jpg' },
    { id: 2, nombre: 'Juguete para gatos', categoria: 'Juguetes', tienda: 'PetStore2', precio: 5000, imagen: 'https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/_/3/_3_3_333302007.jpg' },
    { id: 3, nombre: 'Collar para perros', categoria: 'Accesorios', tienda: 'PetStore1', precio: 15000, imagen: 'https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/3/2/323213536-323213539-min.jpg' },
    { id: 4, nombre: 'Rascador para gatos', categoria: 'Juguetes', tienda: 'PetStore3', precio: 20000, imagen: 'https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/3/0/303050663-min.jpg' },
    { id: 5, nombre: 'Arena para gatos', categoria: 'Alimentos', tienda: 'PetStore2', precio: 15000, imagen: 'https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/3/1/313120461-min.jpg' },
    { id: 6, nombre: 'Casa para perros', categoria: 'Accesorios', tienda: 'PetStore3', precio: 400000, imagen: 'https://acortar.link/YRdRFr' },
    { id: 7, nombre: 'Jaula para pájaros', categoria: 'Accesorios', tienda: 'PetStore1', precio: 45000, imagen: 'https://acortar.link/WF6p0b' },
    { id: 8, nombre: 'Comida para peces', categoria: 'Alimentos', tienda: 'PetStore4', precio: 12000, imagen: 'https://acortar.link/9PLYdx' },
    { id: 9, nombre: 'Juguete para perros', categoria: 'Juguetes', tienda: 'PetStore4', precio: 8000, imagen: 'https://acortar.link/BfimUY' },
    { id: 10, nombre: 'Shampoo para mascotas', categoria: 'Cuidado Personal', tienda: 'PetStore2', precio: 18000, imagen: 'https://acortar.link/UbT6rW' },
    { id: 11, nombre: 'Transportadora para gatos', categoria: 'Accesorios', tienda: 'PetStore1', precio: 50000, imagen: 'https://acortar.link/1eqOJO' },
    { id: 12, nombre: 'Correa extensible', categoria: 'Accesorios', tienda: 'PetStore3', precio: 25000, imagen: 'https://acortar.link/PFCUin' },
];

const ListaProductos = () => {
    const [filtro, setFiltro] = useState('Todos');

    const productosFiltrados = filtro === 'Todos'
        ? productos
        : productos.filter(producto => producto.categoria === filtro || producto.tienda === filtro);

    return (
        <div className="min-h-screen flex flex-col items-center bg-blue-200 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Productos</h2>
            <div className="mb-4">
                <select
                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="Todos">Todos</option>
                    <option value="Alimentos">Alimentos</option>
                    <option value="Juguetes">Juguetes</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Cuidado Personal">Cuidado Personal</option>
                    <option value="PetStore1">PetStore1</option>
                    <option value="PetStore2">PetStore2</option>
                    <option value="PetStore3">PetStore3</option>
                    <option value="PetStore4">PetStore4</option>                   
                </select>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {productosFiltrados.map(producto => (
                    <div key={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="object-cover w-full h-72"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{producto.nombre}</h3>
                            <p className="text-gray-600 mb-2">Categoría: <span className="font-medium">{producto.categoria}</span></p>
                            <p className="text-gray-600 mb-2">Tienda: <span className="font-medium">{producto.tienda}</span></p>
                            <p className="text-gray-600 mb-4">Precio: <span className="font-medium text-xl">${producto.precio.toLocaleString()}</span></p>

                                <button className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out">
                                    Ver mas
                                </button>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProductos;