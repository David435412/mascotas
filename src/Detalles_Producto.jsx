// eslint-disable-next-line no-unused-vars
import React from "react";

const DetallesProducto = () => {
    return (
        <div className="bg-gray-100 dark:bg-white py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img
                                className="w-full h-full object-cover"
                                src="https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/1/1/111100003_ed-min_1.jpg"
                                alt="Product Image"
                            />
                        </div>
                        <div className="flex -mx-2 mb-4 justify-center">
                            <div className="w-1/2 px-2">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4 mt-16" >
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-2">
                            Alimento para perros
                        </h2>
                        <p className="text-gray-600 dark:text-gray-700 text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
                            justo. Integer euismod libero id mauris malesuada tincidunt.
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-700">
                                    Precio:
                                </span>
                                <span className="text-gray-600 dark:text-gray-700">$10.000</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-700">Presentaciones:</span>
                            <div className="flex items-center mt-2">
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">2 kg</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">4 kg</button>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-700">
                                Descripcion de producto:
                            </span>
                            <p className="text-gray-600 dark:text-gray-700 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                                Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
                                vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
                                nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                                lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
                                nisl suscipit, nec tincidunt mi consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetallesProducto