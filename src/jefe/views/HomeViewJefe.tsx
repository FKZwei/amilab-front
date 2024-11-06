import { useState } from "react";

{/* Hay que revisar lo subrayado */}
import { FaBars } from "react-icons/fa"; 

const Header = () => {
  return (
    <div className="header-container">
      {/* <img src="/logo-amilab.jpg" alt="Logo Amilab" className="logo" /> */}
    </div>
  );
};

export const HomeViewJefe = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<{ [key: number]: boolean }>({});
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const toggleDetails = (index: number) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-3">
      {/* dado que no se pudo mostrar correctamente el icono de busqueda y el logo */}
      {/* 
      <div className="flex justify-between items-center mb-4">
        <button onClick={toggleMenu} className="p-2 text-xl">
          <FaBars />
        </button>
      </div>
      */}

      <h1 className="text-xl">Hojas de Ruta</h1>

      <div className="mt-4 flex items-center border border-[#B3E6CC] rounded-xl p-2">
        <input
          type="text"
          placeholder="Escribe el nombre del cliente..."
          className="w-full p-2 text-sm text-[#333] border-none rounded-md focus:outline-none"
        />
        <button className="bg-[#B3E6CC] text-[#014D29] p-2 rounded-md ml-2">
          Buscar
        </button>
      </div>

      {/* vendedores */}
      <div className="mt-10"> 
        {[1, 2, 3].map((vendedorIndex) => (
          <div key={vendedorIndex} className="mt-5">
            <div
              className="bg-[#E0F7FA] p-2 rounded-xl border border-[#00796B] text-[#00796B] cursor-pointer inline-block"
              onClick={() => toggleExpand(vendedorIndex)}
            >
              <h3 className="text-lg font-semibold">Vendedor {vendedorIndex}</h3>
            </div>

            {/* Hoja de ruta */}
            {expanded === vendedorIndex && (
              <div className="mt-3 bg-[#DFCCFB] p-3 rounded-xl border border-[#9C4E97] text-[#333333] flex flex-col">
                <div>
                  <h3 className="text-lg font-semibold">Hoja de Ruta 1</h3>
                  <p><strong>Nombre cliente:</strong> Generico</p>
                  <p><strong>Últimas acciones:</strong></p>
                  <ul className="list-disc pl-5">
                    <li>Reunión con cliente: Fecha</li>
                    <li>Temas Comerciales: Seguimiento2</li>
                    <li>Otras gestiones</li>
                    <li>No cotizado</li>
                  </ul>
                </div>

                {/* Información adicional */}
                {expandedDetails[vendedorIndex] && (
                  <div className="mt-3 text-sm text-gray-700">
                    <p><strong>Información adicional:</strong></p>
                    <ul className="list-disc pl-5">
                      <li>info 1 </li>
                      <li>info 2 </li>
                      <li>info 3 </li>
                    </ul>
                  </div>
                )}
                <p
                  className="text-sm text-blue-600 cursor-pointer mt-auto underline"
                  onClick={() => toggleDetails(vendedorIndex)}
                >
                  {expandedDetails[vendedorIndex]
                    ? "Ocultar historia completa"
                    : "Ver historia completa"}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

