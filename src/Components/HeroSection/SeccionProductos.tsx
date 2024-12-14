import React from "react";
import CarruselProductos from "./CarruselProductos";

const SeccionProductos: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4 h-auto space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Sección de la imagen */}
      <div className="flex-1 w-full lg:w-1/2 p-4 flex items-center justify-center">
        <div className="w-full h-auto max-w-lg lg:max-w-full rounded-lg border shadow-md overflow-hidden flex items-center justify-center bg-white">
          <img
            src="https://via.placeholder.com/200x100"
            alt="Imagen de producto"
            className="w-full h-auto object-cover lg:object-contain"
          />
        </div>
      </div>

      {/* Sección del carrusel */}
      <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center">
        <CarruselProductos />
      </div>
    </div>
  );
};

export default SeccionProductos;
