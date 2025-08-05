import Galaxy from "../components/Galaxy/Galaxy";
import HeroText from "../components/HeroText/HeroText";
//import StarSky from "../components/StarSky/StarSky";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className=" bg-black w-screen h-screen fixed">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1}
            twinkleIntensity={.2}
            glowIntensity={0.2}
            saturation={0.4}
            hueShift={140}
            starSpeed={1}
          />
          <div className="flex h-screen justify-center items-center z-50">
            <HeroText />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
