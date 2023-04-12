import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Pricelist from "./components/Pricelist";

const App = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Pricelist />
    </main>
  );
};

export default App;
