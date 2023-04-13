import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Pricelist from "./components/Pricelist";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Pricelist />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
