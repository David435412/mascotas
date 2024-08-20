// eslint-disable-next-line no-unused-vars
import React from 'react';


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">



            <div className="mt-28 mb-28 py-12 hidden:bg-slate-900">
                <div className="max-w-screen-md mx-auto text-center">
                    <h1 className="mb-4 text-3xl font-bold dark:text-dark">
                        Bienvenido a <span className="text-indigo-600">OmegaPetShop</span>
                    </h1>
                    <p className="text-gray-500 dark:text-black">
                        Tu tienda de confianza para todo lo que tu mascota necesita.
                    </p>
                </div>

                    

                <div className="relative max-w-full mx-auto mt-20">
                    <img
                        className="h-100 w-full object-cover rounded-md"
                        src="https://static.miscota.com/media/1/banners/banner_1716797318_cixwIGRB.webp"
                        alt="Random image"
                    />
                    <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-3xl font-bold">Get Lost in Mountains</h2>
                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
                    <div className="relative md:w-5/12">
                        <img
                            className="rounded-2xl"
                            src="https://static.miscota.com/media/1/banners/banner_1716797470_ci8zbF6C.webp"
                        />
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <h1 className="text-white mb-3 font-bold text-center uppercase lg:text-xl">
                                Learn Webby
                            </h1>
                            <button className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform border border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                                Go to Docs
                            </button>
                        </div>
                    </div>

                    <div className="relative md:w-5/12">
                        <img
                            className="rounded-2xl"
                            src="https://static.miscota.com/media/1/banners/banner_1716797516_ciG5NIAj.webp"
                        />
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <h1 className="text-white mb-3 font-bold text-center uppercase lg:text-xl">
                                Visit Website
                            </h1>
                            <button className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform bg-indigo-500 border-indigo-400 border border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                                Go to Website
                            </button>
                        </div>
                    </div>
                </div>

               

            </div>





        </div>


    );
};


export default Home;
