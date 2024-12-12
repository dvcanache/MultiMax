import React from "react";
import CollageProductos from "./CollageProductos";
import SeccionProductos from "./SeccionProductos";

const SeccionPrincipal: React.FC = () => {
  return (
    <div>
      {/* Seccion de galeria de Descuentos de temporada */}
      <CollageProductos />

      {/* Línea divisoria centrada y con ancho del 85% */}
      <div className="my-8 border-t border-gray-300 w-11/12 mx-auto"></div>

      {/* Seccion Descuentos de productos en general*/}
      <SeccionProductos />

      {/* Seccion de Productos de hogar */}
      {/* Seccion de Productos de deporte */}
      {/* Seccion de Productos de ropa */}
      {/* Seccion de Categorias */}
      {/* Seccion de galeria en general */}
    </div>
  );
};

export default SeccionPrincipal;
