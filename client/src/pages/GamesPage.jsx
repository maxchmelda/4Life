import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Findus, Footer, Games, Navbar } from "../components";
import City from "../assets/city.jpg";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Fivem_M from "../assets/Fivem_military.png";
import Fivem_RP from "../assets/Fivem_rp.png";
import Rust from "../assets/rust.png";
import Minecraft from "../assets/minecraft.png";

const GamesPage = () => {
  const [activePlayers, setActivePlayers] = useState({ players: "-", maxSlots: '-' });

  async function getPlayers() {
      const response = await fetch(import.meta.env.VITE_PLAYERS_URL);
      const data = await response.json();
      setActivePlayers({ players: data.totalPlayers, maxSlots: data.maxSlots})
    }
    
    useEffect(() => {
      getPlayers();
    }, []);

  return (
    <div className="w-full min-h-screen bg-black">
      <div
        className="absolute h-[400px] w-full sm:top-[100px] top-[50px] z-0 opacity-25"
        style={{
          backgroundImage: `url(${City})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute z-5 top-[350px] sm:top-[450px] w-full h-[400px] bg-gradient-to-b from-[#0000002a] via-[#000000] to-[#00000000]" />
      <div className="absolute z-5 top-[0px] w-full h-[150px] bg-gradient-to-b from-black to-[#0000002a]" />

      <div className="flex justify-around items-start max-[1035px]:items-center max-[1035px]:justify-between max-[1035px]:px-20 max-[530px]:px-2">
        <div className="pl-32 max-[530px]:pl-28">
          <Link
            to="/"
          >
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
              src={Logo}
              alt="logo"
              className="w-[150px] z-10 mt-3 max-[530px]:w-[120px]"
            />
          </Link>
        </div>
        <Navbar />
      </div>
      <div>
        <div className="text-white absolute top-[350px] sm:top-[460px] sm:left-[20vw] left-[5vw] flex justify-center items-center gap-6">
          <Link to="/" className="text-white hover:text-gray-400 underline">
            home
          </Link>
          <p>/</p>
          <p>hry</p>
        </div>
        <div className="w-full bg-black flex flex-col justify-center items-center text-white mt-[300px]">
          <div className="w-[90%] md:w-[45%] z-10 flex pt-10 flex-col justify-center gap-10 items-center">
            <h2 className="text-3xl font-bold">Hry na našem serveru</h2>
            <p className="text-white font-light text-center text-sm">
              Vítej na našem herním portálu! Tady najdeš přehled našich serverů
              – pravidelně je aktualizujeme, aby sis mohl užít ten nejlepší
              zážitek. Každá hra má vlastní stránku s popisem, pravidly a
              návodem, jak se připojit. Vyber si hru, která tě baví, a přidej se
              k naší komunitě!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center font-inter gap-4 max-sm:gap-8 mt-20 mb-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.2, delay: 0.5, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.05, transition: { delay: 0 } }}
          className="w-[200px] h-[200px] max-sm:w-[80vw] max-sm:h-[80vw] z-10 bg-no-repeat bg-center cursor-pointer"
          style={{
            background: `url(${Fivem_RP})`,
            backgroundSize: "cover",
          }}
        >
          <Link 
            to="/hry/fivemrp"
            className="text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6"
          >
            <p>Aktivní hráči</p>
            <p>{`${activePlayers.players}/${activePlayers.maxSlots}`}</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.7, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.05, transition: { delay: 0 } }}
          className="w-[200px] h-[200px] max-sm:w-[80vw] max-sm:h-[80vw] z-10 bg-no-repeat bg-center cursor-pointer"
          style={{
            background: `url(${Fivem_M})`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6">
            {/* <p>Aktivní hráči</p>
            <p>-/-</p> */}
            <p>Připravujeme...</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.9, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.05, transition: { delay: 0 } }}
          className="w-[200px] h-[200px] max-sm:w-[80vw] max-sm:h-[80vw] z-10 bg-no-repeat bg-center cursor-pointer"
          style={{
            background: `url(${Rust})`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6">
            {/* <p>Aktivní hráči</p>
            <p>-/-</p> */}
            <p>Připravujeme...</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 1.1, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.05, transition: { delay: 0 } }}
          className="w-[200px] h-[200px] max-sm:w-[80vw] max-sm:h-[80vw] z-10 bg-no-repeat bg-center cursor-pointer"
          style={{
            background: `url(${Minecraft})`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6">
            {/* <p>Aktivní hráči</p>
            <p>-/-</p> */}
            <p>Připravujeme...</p>
          </div>
        </motion.div>
      </div>
      <Findus />
      <Footer />
    </div>
  );
};

export default GamesPage;
