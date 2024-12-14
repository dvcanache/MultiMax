import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface BarraLateralProps {
  isOpen: boolean;
  onClose: () => void;
  toggleBarraLateral: () => void;
  estaScroll: boolean;
  children: React.ReactNode;
}

const BarraLateral: React.FC<BarraLateralProps> = ({
  isOpen,
  onClose,
  toggleBarraLateral,
  estaScroll,
  children,
}) => {
  return (
    <div>
      {/* Botón para abrir/cerrar barra lateral */}
      <button
        className={`fixed ${
          estaScroll ? "top-20 left-0 rounded-r-full" : "top-20 left-8 rounded"
        } bg-blue-500 text-white px-1 py-2 shadow-md hover:bg-blue-700 focus:outline-none z-20 flex items-center justify-center transition-all duration-500 
        ${estaScroll ? "md:left-0" : "md:left-8"} hidden md:flex`}
        style={{
          transitionProperty: "all, border-radius",
        }}
        onClick={toggleBarraLateral}
      >
        <Bars3Icon className="h-6 w-6 mr-2" />
        <span className={`hidden md:block ${estaScroll ? "md:hidden" : ""}`}>
          {!estaScroll && "Todo"}
        </span>
      </button>

      <button
        className="fixed left-0 top-20 rounded-r-full md:hidden bg-blue-500 text-white px-1 py-2 shadow-md hover:bg-blue-700 focus:outline-none z-50 flex items-center justify-center transition-all duration-500"
        onClick={toggleBarraLateral}
      >
        <Bars3Icon className="h-6 w-6 mr-2" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Barra lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-500 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Barra Lateral</h2>
          <button
            className="text-white hover:text-gray-400 focus:outline-none"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">Opción 1</li>
            <li className="hover:bg-gray-700 p-2 rounded">Opción 2</li>
            <li className="hover:bg-gray-700 p-2 rounded">Opción 3</li>
          </ul>
        </div>
      </div>

      {/* Contenido principal */}
      <div
        className={`p-4 transition-all duration-300 ${
          isOpen ? "sm:ml-64 ml-0" : "ml-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BarraLateral;
