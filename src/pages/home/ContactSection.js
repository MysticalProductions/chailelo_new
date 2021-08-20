import React from "react";
import ContactForm from "../../components/ContactForm";

function ContactSection() {
  return (
    <div className="p-8 max-w-screen-2xl mx-auto flex justify-around items-center bg-white my-12">
      <div className="flex flex-col items-center justify-center w-full">
        <img
          alt=""
          src="/assets/graphics/OrangeCup_phone.svg"
          className="w-2/3 -m-16 flex-shrink"
          style={{ transform: `scaleX(-1)` }}
        />
        <div className="text-7xl font-extrabold text-primary-p">Contact Us</div>
      </div>
      <div className="w-full flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;
