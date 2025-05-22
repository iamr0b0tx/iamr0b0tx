import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container max-w-7xl mx-auto ">
      <Header />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
