import React, { useState } from "react";
import Confirm from "./components/UI/Confirm";
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
  const [reservConfirm, setReservConfirm] = useState(false);

  const showReservForm = () => {
    setReservation(true);
  };

  const closeReservForm = () => {
    setReservation(false);
  };

  const customerValues = (data) => {
    console.log(data);

    setReservConfirm(true);

    setTimeout(() => {
      setReservConfirm(false);
    }, 3000);

    setReservation(false);
  };

  console.log(reservation);

  const mainClasses = reservation ? `${"main"} ${"no-events"}` : `${"main"}`;

  return (
    <main className={mainClasses}>
      {reservConfirm && <Confirm />}
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
