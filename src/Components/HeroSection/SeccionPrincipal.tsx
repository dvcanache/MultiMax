import React from "react";
import CollageProductos from "./CollageProductos";
import SeccionProductos from "./SeccionProductos";

const SeccionPrincipal: React.FC = () => {
  return (
    <div>
      {/* Galería de Descuentos */}
      <CollageProductos />
      <div className="my-4 border-t border-gray-300 w-11/12 mx-auto"></div>

      {/* Descuentos de Productos */}
      <SeccionProductos />
    </div>
  );
};

export default SeccionPrincipal;
