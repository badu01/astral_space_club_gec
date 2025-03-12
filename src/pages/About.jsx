import {easeInOut, motion} from 'framer-motion'


function About() {
  return (
    <>
      <section
        id="about"
        className="h-screen w-screen bg-[#0B0B0B] text-white font-space overflow-hidden"
      >
        <div className="flex flex-row justify-between">
          <div className="flex w-16 pb-28 justify-center items-end lg:justify-end lg:p-14 lg:pb-20 border-r border-gray-400/50 lg:max-w-3xl lg:w-3xl h-screen">
            <h1 className="font-bold text-3xl lg:text-6xl lg:mb-8 -rotate-90 text-nowrap lg:rotate-0 lg:text-wrap">about us.</h1>
          </div>
          <div className=" w-full flex flex-col justify-between overflow-y-scroll overflow-x-hidden max-h-[90vh] lg:max-h-[85vh]">
            <motion.div 
            initial={{
                x:300,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:.5,
                ease:easeInOut
            }}
            className="mt-7 px-6 flex flex-col justify-center h-full">
              <h1 className="text-4xl font-bold lg:text-5xl">astral space club</h1>
              <p className="max-w-3xl mt-4 text-[1rem] lg:text-lg font-thin text-gray-400 text-justify">
                Astral Space Club GECT is a one-of-a-kind club of GEC Thrissur
                exclusively dedicated to the space explorer in every Gecian.
                <br /> We promise glorious and fun-filled experiences that will
                enhance your knowledge about the universe and its possibilities.
                Welcome to the official website of Astral Space Club GECT!
              </p>
              <div className="flex  gap-4 mt-4">
                {["instagram", "linked in"].map((social) => (
                  <div key={social} className="border border-white text-white text-xs px-3">
                    {social}
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="border-b border-b-gray-400/50 py-4"></div>
            <motion.div 
            initial={{
                x:300,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:.7,
                ease:easeInOut
            }}
            
            className="mt-7 px-6 h-fit flex flex-col justify-center">
              <h1 className="font-bold text-4xl lg:text-5xl">mission</h1>
              <p className="max-w-3xl mt-4 text-sm lg:text-lg font-thin text-gray-400 text-justify">
                To create curiosity and knowledge about science, space, and
                astronomy among students and the general public.
              </p>
            </motion.div>
            <div className="border-b border-b-gray-400/50 py-4"></div>
            <motion.div 
            initial={{
                x:300,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:1,
                ease:easeInOut
            }}
            
            className="mt-7 px-6 h-fit flex flex-col justify-center">
              <h1 className="font-bold text-4xl lg:text-5xl">vision</h1>
              <p className="max-w-3xl mt-4 text-sm lg:text-lg font-thin text-gray-400 text-justify">
                To be a platform for learning and discussion of science and
                space and cultivate talent in the field of space technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
