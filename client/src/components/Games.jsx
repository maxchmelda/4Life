import Fivem_M from "../assets/Fivem_military.png";
import Fivem_RP from "../assets/Fivem_rp.png";
import Rust from "../assets/rust.png";
import Minecraft from "../assets/minecraft.png";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Games = () => {
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
    <div className="w-full flex justify-center max-[900px]:grid max-[900px]:grid-cols-2 max-sm:px-0 max-[900px]:px-20 max-[900px]:gap-y-14 max-sm:flex max-sm:flex-wrap items-center font-inter max-sm:gap-10 gap-4 max-sm:pb-10">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
        }}
        className="max-sm:w-[80vw] max-sm:h-[80vw] max-[900px]:w-[30vw] max-[900px]:h-[30vw] w-[200px] h-[200px] z-10 bg-no-repeat bg-center max-[900px]:mx-auto min-[900px]:mb-10 cursor-pointer"
        whileHover={{ scale: 1.05, transition: { delay: 0 } }}
        style={{
          background: `url(${Fivem_RP})`,
          backgroundSize: "cover",
        }}
      >
          <Link
            to="/hry/fivemrp"
            className="text-white/60 flex flex-col items-start justify-end h-full p-2 pl-5 pb-6">
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
        className="max-sm:w-[80vw] max-sm:h-[80vw] max-[900px]:w-[30vw] max-[900px]:h-[30vw] w-[200px] h-[200px] z-10 bg-no-repeat bg-center max-[900px]:mx-auto min-[900px]:mb-20 cursor-pointer"
        whileHover={{ scale: 1.05, transition: { delay: 0 } }}
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
        className="max-sm:w-[80vw] max-sm:h-[80vw] max-[900px]:w-[30vw] max-[900px]:h-[30vw] w-[200px] h-[200px]  z-10 bg-no-repeat bg-center max-[900px]:mx-auto min-[900px]:mb-10 cursor-pointer"
        whileHover={{ scale: 1.05, transition: { delay: 0 } }}
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
        className="max-sm:w-[80vw] max-sm:h-[80vw] max-[900px]:w-[30vw] max-[900px]:h-[30vw] w-[200px] h-[200px] max-[900px]:mx-auto z-10 bg-no-repeat bg-center cursor-pointer"
        whileHover={{ scale: 1.05, transition: { delay: 0 } }}
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
  );
};

export default Games;
