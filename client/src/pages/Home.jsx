import { Games, Navbar, About, News, Findus, Footer } from "../components";
import Logo from "../assets/logo.png";
import City from "../assets/city.jpg";
import { motion } from "motion/react";
import { LinearGradient } from "react-text-gradients";
import { Link } from "react-router-dom";

const Home = () => {
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

      <div className=" max-sm:hidden absolute z-5 top-[350px] sm:top-[450px] w-full h-[400px] bg-gradient-to-b from-[#0000002a] via-[#000000] to-[#00000000]" />
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
      <div className="mt-[320px] max-sm:mt-[250px]">
        <div className="pb-5 w-full mb-8 sm:hidden flex items-center justify-start gap-6">
          <LinearGradient
            gradient={["to right", "#432594 ,#b785d9"]}
            className="text-4xl font-bold ml-10 py-6"
          >
            Naše hry
          </LinearGradient>
          <hr className="w-[35%] border-[#793fab]" />
        </div>
        <Games />
      </div>
      <About />
      <News />
      <Findus />
      <Footer />
    </div>
  );
};

export default Home;
