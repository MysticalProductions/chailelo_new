import React from "react";
import Header from "./../../components/Header";
import Hero from "./Hero";
import Footer from "./../../components/Footer";
import Team from "./Team";
import FounderMessage from "./FounderMessage";
import VisionMission from "./VisionMission";
import Outlets from "./Outlets";

function AboutUs() {
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
        <section className="my-12">
          <div className="max-w-screen-lg text-center text-4xl text-primary-o font-bold mx-auto">
            Lorem ut dolore no kasd sed lorem, et consetetur aliquyam et lorem
            takimata nonumy rebum eirmod dolore, lorem elitr sed.
          </div>
          <div className="max-w-screen-2xl mx-auto shadow flex bg-primary-g mt-12 items-center">
            <img
              src="/assets/graphics/Bunmaska.svg"
              className="bg-black w-1/2"
              alt=""
            />
            <div className="p-12 text-center font-semibold text-2xl">
              No sea dolore ipsum kasd sanctus et sit eos, ipsum lorem lorem sed
              gubergren elitr. Dolor lorem consetetur lorem elitr dolor, dolore
              sanctus gubergren tempor ipsum elitr takimata rebum diam. Nonumy
              nonumy invidunt dolore dolor sanctus ut. Justo vero nonumy clita
              voluptua tempor dolore, sed consetetur elitr diam no sadipscing et
              nonumy. Magna sea diam dolore sea ut, elitr at gubergren amet
              dolor eos, rebum erat dolore kasd invidunt accusam et. Justo sed
              diam invidunt sea et no sit voluptua, stet sit gubergren et est
              clita erat at, eos voluptua sea nonumy dolore. Diam aliquyam
              sanctus erat aliquyam amet, erat.
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-2xl mx-auto flex items-center">
            <div className="p-12 font-semibold text-2xl">
              No sea dolore ipsum kasd sanctus et sit eos, ipsum lorem lorem sed
              gubergren elitr. Dolor lorem consetetur lorem elitr dolor, dolore
              sanctus gubergren tempor ipsum elitr takimata rebum diam. Nonumy
              nonumy invidunt dolore dolor sanctus ut. Justo vero nonumy clita
              voluptua tempor dolore
            </div>
            <img
              src="/assets/graphics/Orangecup_market.svg"
              className="w-1/3"
              alt=""
            />
          </div>
        </section>
        <FounderMessage />
        <VisionMission />
        <Team />
        <Outlets />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
