import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Content from "./components/Content/Content.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards/>
      <Content/>
    </>
  );
};

export default App;
