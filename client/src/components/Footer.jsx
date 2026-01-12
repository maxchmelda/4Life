import React from "react";

const Footer = () => {

  const handleOpenPDF = (pdfPath) => {
    window.open("/" + pdfPath, "_blank");
  };


  return (
    <div
      className="font-inter w-full bg-black px-4 py-8 flex justify-around items-center text-sm flex-wrap"
      id="footer"
    >
      <p className="text-gray-600">© Copyright 2025. All Rights Reserved.</p>

      <button 
        className="text-gray-600 underline sm:pr-28"
        onClick={() => handleOpenPDF('podminky.pdf')}
      >
        Podmínky, GDPR, ...
      </button>

      <a className="text-gray-600 underline" href="https://vuzuco.cz">
        Made by Vuzuco
      </a>
    </div>
  );
};

export default Footer;
