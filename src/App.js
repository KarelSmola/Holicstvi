import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Pricelist from "./components/Pricelist";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Pricelist />
      <Contact />
    </main>
  );
};

export default App;
