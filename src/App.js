import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Pricelist from "./components/Pricelist";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Gallery />
      <Pricelist />
      <Reservation />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
