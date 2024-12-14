import React, { useState, useEffect } from "react";
import CollageProductos from "./CollageProductos";
import SeccionProductos from "./SeccionProductos";
import BarraLateral from "./BarraLateral";

const SeccionPrincipal: React.FC = () => {
  const [isBarraLateralOpen, setIsBarraLateralOpen] = useState(false);
  const [estaScroll, setEstaScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setEstaScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBarraLateral = () => {
    setIsBarraLateralOpen(!isBarraLateralOpen);
  };

  return (
    <div>
      <BarraLateral
        isOpen={isBarraLateralOpen}
        onClose={() => setIsBarraLateralOpen(false)}
        toggleBarraLateral={toggleBarraLateral}
        estaScroll={estaScroll}
        children={undefined}
      />

      {/* Contenido Principal */}
      <div
        className={`p-4 transition-all duration-300 ${
          isBarraLateralOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        {/* Galería de Descuentos */}
        <CollageProductos />
        <div className="my-4 border-t border-gray-300 w-11/12 mx-auto"></div>

        {/* Descuentos de Productos */}
        <SeccionProductos />
      </div>
    </div>
  );
};

export default SeccionPrincipal;
