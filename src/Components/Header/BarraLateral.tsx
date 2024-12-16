import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FilterProducts, NavBarMenu } from "../../mockData/data";
import { FaFilter } from "react-icons/fa";

const LogoUrl = `https://multimax.com.ve/wp-content/uploads/2024/11/Logo-Multimax-web.png`;

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
          estaScroll ? "top-20 left-0 rounded-r-full" : "top-20 left-8 rounded-r-full"
        } bg-blue-500 text-white px-1 py-2 shadow-md hover:bg-blue-700 focus:outline-none z-20 flex items-center justify-center transition-all duration-300 ease-in
        ${estaScroll ? "md:left-0 w-10" : "md:left-8 w-20"} hidden md:flex`}
        style={{
          transitionProperty: "all, border-radius",
        }}
        onClick={toggleBarraLateral}
      >
        <Bars3Icon className="h-6 w-6 mr-2" />
        <span className={`hidden md:block ${estaScroll ? "md:hidden" : ""}`}>
          Todo
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
        className={`fixed top-0 left-0 h-full w-64 bg-white text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center bg-blue-500">
          <div className="text-2xl flex items-center">
            <a href={NavBarMenu[0].link} className="min-w-[40px]">
              <img
                src={LogoUrl}
                alt="Multimax Logo"
                className="object-cover h-10"
              />
            </a>
          </div>
          <button
            className="text-white hover:text-gray-400 focus:outline-none"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
          <div className="w-full bg-blue-400 text-white p-3.5 font-semibold text-lg inline-flex justify-between items-center">
            Filtros
            <FaFilter />
          </div>
        <ul className="">
          <div className="overflow-y-auto h-[calc(100vh-130px)]">
          {FilterProducts.map((item) => (
            <li
              key={item.id}
              className="bg-white text-gray-800 hover:bg-gray-200 py-3.5 px-4 cursor-pointer flex items-center justify-between"
            >
              <a className=" font-semibold text-md text-nowrap">{item.type}</a>
              <img src={item.image} alt={item.type} className="h-8 w-8"/>
            </li>
          ))}
          </div>
        </ul>
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
