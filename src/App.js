import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Pricelist from "./components/Pricelist";
import ReservationButton from "./components/ReservationButton";
import ReservForm from "./components/UI/Modals/ReservForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [reservation, setReservation] = useState(false);
  const showReservForm = () => {
    setReservation(true);
  };

  const closeReservForm = () => {
    setReservation(false);
  };

  return (
    <main>
      <Navigation />
      <Hero />
      <Gallery />
      <Pricelist />
      {reservation && <ReservForm onCloseReservForm={closeReservForm} />}
      <ReservationButton onShowReservForm={showReservForm} />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
