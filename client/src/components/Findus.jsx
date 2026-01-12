import { BsDiscord } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { RiInstagramFill } from "react-icons/ri";

const Findus = () => {
  return (
    <div
      className="w-full font-inter flex justify-center items-center py-14 max-sm:py-0 bg-gradient-to-r from-[#200734] to-[#580101]"
      id="findus"
    >
      <div className="bg-[#141414] max-sm:py-20 py-10 px-20 max-sm:px-0 max-sm:w-full flex justify-center items-center gap-12 flex-col sm:rounded-2xl">
        <h2 className="font-bold text-white text-2xl max-sm:text-3xl">
          kde nás najdete
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 min-[821px]:grid-cols-3 grid-cols-1 gap-10">
          <a href="https://discord.gg/xPYBMzwUpD" target="_blank" className="w-[220px] max-sm:w-[80vw] cursor-pointer font-Opensans font-bold py-1.5 px-10 flex justify-center items-center gap-2 bg-gradient-to-r from-[#243081] hover:from-[#3A55FF] to-[#324DFF] hover:to-[#8999FF] rounded-2xl">
            <BsDiscord color="white" size={35} />
            <p className="text-white">DISCORD</p>
          </a>
          <a href="https://www.instagram.com/4life_czsk?igsh=OTl3bms2MW91dmQz" target="_blank" className="w-[220px] max-sm:w-[80vw] cursor-pointer font-Opensans font-bold py-1.5 px-10 flex justify-center items-center gap-2 bg-gradient-to-r from-[#f9ce3483] hover:from-[#f9ce34] via-[#ee2a7c7e] hover:via-[#ee2a7c] to-[#6228d77a] hover:to-[#6228d7] rounded-2xl">
            <RiInstagramFill color="white" size={35} className="roxl" />
            <p className="text-white">INSTAGRAM</p>
          </a>
          <a href="https://www.youtube.com/@4LIFE-4you" target="_blank" className="w-[220px] max-sm:w-[80vw] cursor-pointer font-Opensans font-bold py-1.5 px-10 flex justify-center items-center gap-2 bg-gradient-to-r from-[#ff000080] hover:from-[#ff0000] to-[#31010180] hover:to-[#310101] rounded-2xl">
            <FaYoutube color="white" size={35} />
            <p className="text-white">YOUTUBE</p>
          </a>
          <a 
            href="mailto:podpora@4life.games" 
            className="w-[230px] max-sm:w-[80vw] font-Opensans font-bold py-1.5 px-5 flex justify-center items-center gap-2 bg-gradient-to-r from-[#7daaff83] hover:from-[#7daaff] to-[#003e9c83] hover:to-[#003e9c] rounded-2xl"
          >
            <IoIosMail color="white" size={35} />
            <p className=" text-white">E-MAIL</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Findus;
