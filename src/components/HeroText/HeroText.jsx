import { motion } from "framer-motion";

function HeroText() {
  return (
    <div className="relative flex w-fit items-center z-50">
      <motion.img
        src={'/public/assets/astral_moon.svg'}
        alt="Astral Moon"
        className="absolute h-32 xl:left-[-5rem] -top-2 xl:h-60"
        initial={{
          rotate: -90,
          opacity: 0
        }}
        whileInView={{
          rotate: 0,
          opacity: 1
        }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
      />

      <div className="text-white flex flex-col items-center relative">
        <h1 className="text-6xl xl:text-9xl font-light font-urbanist">ASTRAL</h1>
        <h1 className="text-5xl xl:text-8xl font-thin font-urbanist">SPACE CLUB</h1>
        <h1 className="text-sm xl:text-2xl font-thin font-urbanist">
          GOVERNMENT ENGINEERING COLLEGE, THRISSUR
        </h1>
      </div>
    </div>
  );
}

export default HeroText;
