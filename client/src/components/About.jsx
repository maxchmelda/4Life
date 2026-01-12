import Background from "../assets/about-bg.png";
import MobileBackground from "../assets/about-bg-mobile.png";
import { LinearGradient } from "react-text-gradients";
import { BsDiscord } from "react-icons/bs";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full z-10 bg-cover ml-[-2px] bg-no-repeat bg-center text-white font-inter py-28 relative max-[1050px]:py-20 max-[835px]:text-sm max-[650px]:mt-10"
      style={{
        backgroundImage: `url(${MobileBackground})`,
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-start items-start w-[40vw] max-[650px]:w-[80vw] ml-24 max-[650px]:mx-auto my-auto z-10">
        <LinearGradient
          gradient={["to right", "#979797 ,#754141"]}
          className="mb-4 text-5xl font-bold max-sm:text-4xl max-sm:mb-0 "
        >
          O serveru
        </LinearGradient>
        <span className="mt-2 max-sm:mt-4">
          Vítejte na našem herním portálu! Nezaměřujeme se na jednu hru, ale
          snažíme se pro každý server odvést maximum. Dbáme na férové a
          přátelské prostředí pro všechny hráče. Náš projekt vznikl z touhy
          vytvořit komunitu, kde se každý cítí vítán. Začali jsme jako reakce na
          špatnou správu jiných serverů a postupně se rozrostli v plnohodnotný
          herní portál. Neustále ho vylepšujeme, aby hráči měli co nejlepší
          zážitek.
        </span>
        <span className="max-[650px]:hidden">
          Naším cílem je nejen kvalitní zábava, ale i propojení hráčů, kteří si
          vzájemně pomáhají a tvoří skvělou komunitu. Děkujeme za vaši podporu a
          těšíme se na společné hraní!
        </span>

        <button className="bg-gradient-to-r from-[#243081] to-[#324DFF] hover:from-[#3A55FF] hover:to-[#8999FF] py-2 max-sm:py-1 px-4 max-sm:px-2 mt-10 max-sm:mt-8 rounded-2xl flex justify-around items-center gap-4">
          <BsDiscord color="white" size={35} />
          <a href="https://discord.gg/xPYBMzwUpD" target="_blank" className="font-bold font-Opensans">PŘIPOJTE SE K NÁM</a>
        </button>
      </div>
    </motion.div>
  );
};

export default About;
