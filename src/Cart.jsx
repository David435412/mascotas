// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// const productos = [
    // {id: 1, nombre: 'Alimento para perros', tienda: 'PetStore1', precio: 10000, cantidad: 1, total: 10000, imagen: 'https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/1/1/111100003_ed-min_1.jpg' },
    // {id: 2, nombre: 'Juguete para gatos', tienda: 'PetStore1', precio: 5000, cantidad: 1, total: 5000, imagen: 'https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/_/3/_3_3_333302007.jpg' }
// ];
const Cart = () => {
    return(
        <div className="bg-gray-100 h-screen py-8">
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-semibold mb-4">Carrito Compras</h1>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-3/4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-semibold">Producto</th>
                <th className="text-left font-semibold">Precio</th>
                <th className="text-left font-semibold">Cantidad</th>
                <th className="text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 mr-4"
                      src="https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/1/1/111100003_ed-min_1.jpg"
                      alt="Product image"
                    />
                    <span className="font-semibold">Alimento para perros</span>
                  </div>
                </td>
                <td className="py-4">$19.99</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <button className="border rounded-md py-2 px-4 mr-2">
                      -
                    </button>
                    <span className="text-center w-8">1</span>
                    <button className="border rounded-md py-2 px-4 ml-2">
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4">$19.99</td>
              </tr>
              
              
              {/* More product rows */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:w-1/4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$19.99</span>
          </div>     
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">$21.98</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
            Verificar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Cart