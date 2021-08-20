import React from "react";
import ContactForm from "./../../components/ContactForm";

function FormSection() {
  return (
    <div className="p-8 max-w-screen-2xl mx-auto flex justify-around items-center my-12">
      <div className="flex flex-col items-center justify-center w-full">
        <img
          alt=""
          src="/assets/graphics/Sandwich.svg"
          className="w-2/3 -m-16 flex-shrink"
        />
        <div className="text-2xl font-semibold max-w-sm text-center">
          LEAVE US A MESSAGE WE WILL GET BACK TO YOU
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default FormSection;
