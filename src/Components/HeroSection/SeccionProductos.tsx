import React from "react";
import CarruselProductos from "./CarruselProductos";

const SeccionProductos: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 h-auto">
      <div className="flex-1 md:w-1/2 p-4 flex items-center justify-center">
        <div className="w-full max-h-[80%] rounded-lg border overflow-hidden flex items-center justify-center bg-white">
          <img
            src="https://via.placeholder.com/200x100"
            alt="Imagen de producto"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 md:w-1/2 flex items-center justify-center">
        <CarruselProductos />
      </div>
    </div>
  );
};

export default SeccionProductos;
