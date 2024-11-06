import React from 'react';
import { FaBars } from "react-icons/fa"; // Importamos el ícono de hamburguesa

// Definimos el tipo de las props si es necesario
// En este caso no tiene props, pero si lo tuviera, podrías agregar algo como:
// interface HeaderProps {
//   onMenuToggle: () => void;
// }

const Header: React.FC = () => {
  return (
    <div className="header-container flex justify-between items-center mb-4">
      {/* Menú hamburguesa */}
      <button onClick={() => console.log("Abrir menú")} className="p-2 text-xl">
        <FaBars />
      </button>

      {/* Imagen al inicio (asegurándote de tener la imagen en la carpeta assets) */}
      <img src="/logo-amilab.jpg" alt="Logo Amilab" className="logo" />
      
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar..."
        className="search-input p-2 border border-[#B3E6CC] rounded-lg"
      />
    </div>
  );
};

export default Header;
