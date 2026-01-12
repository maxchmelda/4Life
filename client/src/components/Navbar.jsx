import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Corrected import
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const selected = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigate = useNavigate();

  const navigateToNews = () => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById("news");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="max-[1035px]:hidden inline-flex justify-center z-10 font-inter items-center gap-20 py-3 px-6 border-b border-b-custom-border mt-10"
      >
        <Link
          className={`hover:underline text-white ${selected === "/" ? "text-white" : "text-white/60"}`}
          to="/"
        >
          home
        </Link>
        <Link
          className={`hover:underline text-white ${selected === "/hry" ? "text-white" : "text-white/60"}`}
          to="/hry"
        >
          hry
        </Link>
        <Link
          className={`hover:underline text-white ${selected === "/pravidla" ? "text-white" : "text-white/60"}`}
          to="/pravidla"
        >
          komunitní pravidla
        </Link>
        <button
            className={`hover:underline text-white ${selected === "/novinky" ? "text-white" : "text-white/60"}`}
            onClick={() => {
              setIsOpen(false);
              navigateToNews();
            }}
          >
            novinky
          </button>
          <button
            className={`hover:underline text-white ${selected === "/kontakt" ? "text-white" : "text-white/60"}`}
            onClick={() => {
              setIsOpen(false);
              scrollToSection("findus");
            }}
          >
            kontakt
          </button>
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-10 min-[1035px]:hidden mr-5"
      >
        <FiMenu color={"white"} className="w-[30px] h-[30px]" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-[1035px]:hidden text-white z-20 underline rounded-lg font-inter font-[400] text-sm absolute top-28 right-5 bg-[#343434] py-6 px-10 shadow-white/10 shadow-md flex flex-col justify-center items-center gap-4"
        >
          <Link to="/" className="text-lg" onClick={() => setIsOpen(false)}>
            home
          </Link>
          <Link to="/hry" className="text-lg" onClick={() => setIsOpen(false)}>
            hry
          </Link>
          <Link to="/pravidla" className="text-lg" onClick={() => setIsOpen(false)}>
            komunitní pravidla
          </Link>
          <button
            className="text-lg"
            onClick={() => {
              setIsOpen(false);
              navigateToNews();
            }}
          >
            novinky
          </button>
          <button
            className="text-lg"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("findus");
            }}
          >
            kontakt
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
