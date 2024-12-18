import React from "react";
import CarruselProductos from "./CarruselProductos";

const SeccionProductos: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4 space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Sección de la imagen */}
      <div className="flex-1 lg:w-1/2 h-[400px] flex items-center justify-center">
        <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-200">
          <img
            src="/images/PromoTv.jpeg"
            alt="Imagen promocional"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sección del carrusel */}
      <div className="flex-1 lg:w-1/2 h-[400px] flex items-center justify-center">
        <CarruselProductos />
      </div>
    </div>
  );
};

export default SeccionProductos;
