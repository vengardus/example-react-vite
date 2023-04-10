import React from 'react'

export const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-50 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex">
          <li>
            <a href="/" className="text-gray-50 hover:text-red-500 px-3 py-2">
              Inicio
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-50 hover:text-red-500 px-3 py-2">
              Proyectos
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-50 hover:text-red-500 px-3 py-2">
              Contacto
            </a>
          </li>
        </ul>
        <h1 className="text-2xl font-serif">Mi Portafolio</h1>
      </nav>
    </header>
  );
};

