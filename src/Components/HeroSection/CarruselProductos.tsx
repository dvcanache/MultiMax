import React, { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1",
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Descripción del producto 3",
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion: "Descripción del producto 4",
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    nombre: "Producto 5",
    descripcion: "Descripción del producto 5",
    imagen: "https://via.placeholder.com/150",
  },
];

const CarruselProductos = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const productosVisibles = 3; // Mostrar 3 productos

  const siguiente = () => {
    if (indiceActivo < productos.length - productosVisibles) {
      setIndiceActivo((prev) => prev + 1);
    }
  };

  const anterior = () => {
    if (indiceActivo > 0) {
      setIndiceActivo((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden flex flex-col justify-center items-center">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${
            indiceActivo * (100 / productosVisibles)
          }%)`,
        }}
      >
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="flex-shrink-0 w-1/3 text-center p-4"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="mx-auto mb-4 w-40 h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p className="text-gray-500">{producto.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Controles */}
      {indiceActivo > 0 && (
        <button
          onClick={anterior}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
        >
          &#8592;
        </button>
      )}
      {indiceActivo < productos.length - productosVisibles && (
        <button
          onClick={siguiente}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
        >
          &#8594;
        </button>
      )}

      {/* Indicadores */}
      <div className="flex justify-center mt-6">
        {Array.from({
          length: Math.ceil(productos.length / productosVisibles),
        }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              indiceActivo === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setIndiceActivo(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarruselProductos;
