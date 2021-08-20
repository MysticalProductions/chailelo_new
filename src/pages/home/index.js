import React from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Hero from "./Hero";
import ContactSection from "./ContactSection";
import FeaturedOn from "./FeaturedOn";
import BestSellers from "./BestSellers";
import Story from "./Story";
import USP from "./USP";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div
      className="bg-blend-lighten bg-opacity-80 bg-primary-q flex flex-col min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(/assets/graphics/Background.svg)`,
      }}
    >
      <Header />

      <main className="flex-grow">
        <Hero />
        <BestSellers />
        <Story />
        <USP />
        <Gallery />
        <Testimonials />
        <FeaturedOn />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
