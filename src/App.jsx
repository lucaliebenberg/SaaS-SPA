import { useState } from "react";
import reactLogo from "./assets/react.svg";

// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import Companies from "./components/Companies";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <Companies />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
