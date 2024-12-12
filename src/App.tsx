import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import SeccionPrincipal from "./Components/HeroSection/SeccionPrincipal";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <SeccionPrincipal />
    </div>
  );
};

export default App;
