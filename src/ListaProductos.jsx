import React, { useState } from 'react';

const productos = [
    { id: 1, nombre: 'Alimento para perros', categoria: 'Alimentos', tienda: 'PetStore1' },
    { id: 2, nombre: 'Juguete para gatos', categoria: 'Juguetes', tienda: 'PetStore2' },
    { id: 3, nombre: 'Collar para perros', categoria: 'Accesorios', tienda: 'PetStore1' },
    { id: 4, nombre: 'Rascador para gatos', categoria: 'Juguetes', tienda: 'PetStore3' },
    { id: 5, nombre: 'Arena para gatos', categoria: 'Alimentos', tienda: 'PetStore2' },
    { id: 6, nombre: 'Casa para perros', categoria: 'Accesorios', tienda: 'PetStore3' },
    { id: 7, nombre: 'Jaula para pájaros', categoria: 'Accesorios', tienda: 'PetStore1' },
    { id: 8, nombre: 'Comida para peces', categoria: 'Alimentos', tienda: 'PetStore4' },
    { id: 9, nombre: 'Juguete para perros', categoria: 'Juguetes', tienda: 'PetStore4' },
    { id: 10, nombre: 'Shampoo para mascotas', categoria: 'Cuidado Personal', tienda: 'PetStore2' },
    { id: 11, nombre: 'Transportadora para gatos', categoria: 'Accesorios', tienda: 'PetStore1' },
    { id: 12, nombre: 'Correa extensible', categoria: 'Accesorios', tienda: 'PetStore3' },   
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productosFiltrados.map(producto => (
                    <div key={producto.id} className="bg-yellow-50 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
                        <p className="text-gray-600">Categoría: {producto.categoria}</p>
                        <p className="text-gray-600">Tienda: {producto.tienda}</p>
                        <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700">
                            Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProductos;
