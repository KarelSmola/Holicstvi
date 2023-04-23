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

  const customerValues = (data) => {
    console.log(data);
  };

  const mainClasses = reservation ? `${"main"} ${"no-events"}` : `${"main"}`;

  return (
    <main className={mainClasses}>
      <Navigation order={showReservForm} />
      <Hero />
      <Gallery />
      <Pricelist />
      {reservation && (
        <ReservForm
          onCloseReservForm={closeReservForm}
          onCustomerValues={customerValues}
        />
      )}
      <ReservationButton onShowReservForm={showReservForm} />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
