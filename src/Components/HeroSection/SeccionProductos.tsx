import React from "react";
import CarruselProductos from "./CarruselProductos";

const SeccionProductosConImagen: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 h-screen">
      <div className="flex-1 md:w-1/2 p-4 flex items-center justify-center">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Imagen de producto"
          className="w-full h-auto max-h-[80%] rounded-lg object-contain"
        />
      </div>
      <div className="flex-1 md:w-1/2 ">
        <CarruselProductos />
      </div>
    </div>
  );
};

export default SeccionProductosConImagen;
