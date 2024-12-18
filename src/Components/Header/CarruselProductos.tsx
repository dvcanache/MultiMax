import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const productos = [
  {
    id: 1,
    nombre: "Televisor HD JVC 32″ con Google TV",
    precio: "$159,99",
    descripcion:
      "Hazlo todo en Google TV. Accede a más de 400.000 películas y programas. Usa tus apps favoritas, escucha música y más.",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2023/11/LT32KB138-9-300x300.jpg",
  },
  {
    id: 2,
    nombre: "Aire de ventana TCL 5000BTU",
    precio: "$170.00",
    descripcion:
      "Aire acondicionado de ventana con alta eficiencia, capacidad de 5.000 BTU.",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2024/10/TAC05CWDM-300x300.jpg",
  },
  {
    id: 3,
    nombre: "Televisor Smart RCA 32″ con Roku TV",
    precio: "$163.00",
    descripcion:
      "Disfruta de tu nuevo televisor pantalla LED de RCA, con resolución HD, gracias a su tecnología Roku TV, tendrás acceso a tu contenido de contenido Streaming favorito.",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2023/11/RC32K23SNXSM-9-600x600.jpg",
  },

  {
    id: 4,
    nombre: "Cocina a gas 4H Premier negro",
    precio: "$169,99",
    descripcion: "Cocina Premier a gas con 4 quemadores y horno a gas.",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2024/11/EF8700NG204B-300x300.jpg",
  },
  {
    id: 5,
    nombre: "Lavadora doble tina Milatti 9 Kg",
    precio: "$184.00",
    descripcion:
      "Lavadora semiautomática con sistema Air Dry para un lavado eficiente, cuenta con dos motores independientes para mayor rapidez y ahorro, dos ciclos de lavado, dos entradas de agua, filtro antipelusas, manguera de entrada de agua y base antiroedores.",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2024/08/M20W01W-300x300.jpg",
  },
  {
    id: 6,
    nombre: "Bocina recargable Premier 12″",
    precio: "$74.00",
    descripcion:
      "Bocina portátil recargable para fiestas, con manija y ruedas para fácil translado.",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2024/06/BB8515TBBR12SBW.jpg",
  },
  {
    id: 7,
    nombre: "Freidora de aire Premier 5 litros",
    precio: "$62.00",
    descripcion:
      "La freidora de aire te permitirá preparar deliciosos platos de manera saludable. Es ideal para freír, asar y hornear sin utilizar aceite. Cuenta con un sistema rápido de circulación de aire caliente con una temperatura ajustable hasta 200°C",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2024/04/FRD8526AFB-600x600.png",
  },
  {
    id: 8,
    nombre: "Cafetera de 5 tazas HomeEver",
    precio: "$12,99",
    descripcion:
      "Prepare la taza de café perfecta. Simplemente coloque su café, agregue agua y presione el botón de encendido.",
    imagen: "https://multimax.com.ve/wp-content/uploads/2024/05/CM2108-2-1.jpg",
  },
  {
    id: 9,
    nombre: "Cafetera 5 tazas Oster negro",
    precio: "$25.00",
    descripcion:
      "La cafetera Oster de 5 tazas permite disfrutar de una taza de café recién hecha al momento que desees. Con su función de Pausa y Servir, puedes servir una taza de café durante el proceso de colado para disfrutar de su rico sabor. ¡Contiene el tamaño adecuado para ahorrar espacio en tu cocina!.",
    imagen:
      "https://multimax.com.ve/wp-content/uploads/2023/11/BVSTDC05LUX-9-600x600.jpg",
  },
];

const Carrusel: React.FC = () => {
  const [indice, setIndice] = useState(0);
  const productosVisibles = 3;

  const siguiente = () => {
    setIndice((prev) =>
      Math.min(prev + 1, productos.length - productosVisibles)
    );
  };

  const anterior = () => {
    setIndice((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      {/* Botón Anterior */}
      <button
        onClick={anterior}
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full 
                    z-10 transition duration-300 hover:bg-gray-700 ${
                      indice === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100"
                    }`}
      >
        ❮
      </button>

      {/* Carrusel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${indice * (100 / productosVisibles)}%)`,
          }}
        >
          {productos.map((producto) => (
            <div key={producto.id} className="flex-none w-1/3 p-2">
              {/* Contenido del producto */}
              <div className="text-left space-y-2">
                {/* Imagen */}
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Precio */}
                <p className="text-lg font-semibold">{producto.precio}</p>
                {/* Nombre */}
                <p className="text-lg font-semibold">{producto.nombre}</p>
                {/* Descripción */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {producto.descripcion}
                </p>
                {/* Botón Agregar al Carrito */}
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:scale-95 transition-transform duration-200">
                  <span>Agregar</span>
                  <FiShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón Siguiente */}
      <button
        onClick={siguiente}
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full 
                    z-10 transition duration-300 hover:bg-gray-700 ${
                      indice >= productos.length - productosVisibles
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100"
                    }`}
      >
        ❯
      </button>
    </div>
  );
};

export default Carrusel;
