// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    return(
        <footer className="bg-white rounded-lg shadow m-2 dark:bg-white-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-black-500 sm:text-center dark:text-black-400">
      © 2024{" "}
      <a href="https://flowbite.com/" className="hover:underline">
      OmegaPetShop™
      </a>
      . Todos los derechos reservados.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-black-400 sm:mt-0">
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          Sobre
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          Politica de privacidad
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          Sugerencias
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Contacto
        </a>
      </li>
    </ul>
  </div>
</footer>

    )
}

export default Footer