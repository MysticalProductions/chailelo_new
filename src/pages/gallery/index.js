import React from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Hero from "./Hero";
import GalleryImages from "./GalleryImages";

function Gallery() {
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
        <GalleryImages />
      </main>
      <Footer />
    </div>
  );
}

export default Gallery;
