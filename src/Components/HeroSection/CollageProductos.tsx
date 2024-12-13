import React from "react";

interface Producto {
  id: number;
  imagen: string;
}

const productos: Producto[] = [
  {
    id: 1,
    imagen: "https://pagedone.io/asset/uploads/1688031162.jpg",
  },
  {
    id: 2,
    imagen: "https://pagedone.io/asset/uploads/1688031232.jpg",
  },
  {
    id: 3,
    imagen: "https://pagedone.io/asset/uploads/1688031357.jpg",
  },
  {
    id: 4,
    imagen: "https://pagedone.io/asset/uploads/1688031375.jpg",
  },
  {
    id: 5,
    imagen: "https://pagedone.io/asset/uploads/1688031396.jpg",
  },
  {
    id: 6,
    imagen: "https://pagedone.io/asset/uploads/1688031414.png",
  },
];

const CollageProductos: React.FC = () => {
  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Productos en Descuento
      </h1>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
        {productos.map((producto) => (
          <div className="break-inside-avoid mb-8" key={producto.id}>
            <img
              src={producto.imagen}
              alt={`Producto ${producto.id}`}
              className="h-auto max-w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollageProductos;
