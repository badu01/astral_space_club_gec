import HeroText from "../components/HeroText/HeroText";
import StarSky from "../components/StarSky/StarSky";

function Hero() {
  return (
    <>
      <section id='hero'>
        <div>
          <StarSky />
          <div className="flex h-screen justify-center items-center">
            <HeroText />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
