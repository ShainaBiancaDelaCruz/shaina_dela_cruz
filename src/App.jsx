import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Banner from "./Components/Banner/Banner";
import Features from "./Components/Features/Features";
import Services from "./Components/Services/services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden bg-black duration-300 space-mono-regular ">
      <Navbar />
   
      <Hero togglePlay={togglePlay} />
      <Banner togglePlay={togglePlay} />
      <Features />
      <Services/>
      <Contact/>
      <Footer />

    </main>
  );
};

export default App;
