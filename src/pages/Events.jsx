import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

function AllEvents() {
  return (
    <section
      id="events"
      className="h-screen w-screen bg-[#0B0B0B] text-white font-space overflow-hidden"
    >
      <div className="flex flex-row justify-between">
        <div className="flex w-16 pb-24 justify-center items-end lg:justify-end lg:p-14 lg:pb-20 border-r border-gray-400/50 lg:max-w-3xl lg:w-3xl h-screen">
          <h1 className="font-bold text-3xl lg:text-6xl lg:mb-8 -rotate-90 text-nowrap lg:rotate-0 lg:text-wrap">
            events.
          </h1>
        </div>
        <div className=" w-full flex flex-col lg:flex-row justify-between max-h-[95vh] lg:max-h-[95vh]">
          <motion.div
            initial={{
              y: 300,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
            className="bg-gray-600 w-full h-full bg-cover bg-center p-10 lg:pb-20 flex flex-col justify-between"
            style={{ backgroundImage: "url(/assets/event_bg_1.jpg)" }}
          >
            <Link to="/events/all" className="h-full flex flex-col justify-between">
              <h1 className="text-2xl font-medium">all</h1>
              <p className="text-xs lg:text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, minus sapiente libero, illo et ea ducimus, mollitia
                nemo ex numquam quis distinctio nostrum alias delectus iste
                earum repellat repudiandae omnis!
              </p>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              y: 300,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              ease: easeInOut,
            }}
            className="bg-gray-600 w-full h-full bg-cover bg-center p-10 lg:pb-20 flex flex-col justify-between"
            style={{ backgroundImage: "url(/assets/event_bg_2.jpg)" }}
          >
            <Link to="/events/upcoming" className="h-full flex flex-col justify-between">
              <h1 className="text-2xl font-medium">upcoming</h1>
              <p className="text-xs lg:text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, minus sapiente libero, illo et ea ducimus, mollitia
                nemo ex numquam quis distinctio nostrum alias delectus iste
                earum repellat repudiandae omnis!
              </p>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              y: 300,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: easeInOut,
            }}
            className="bg-gray-600 w-full h-full bg-cover bg-center p-10 lg:pb-20 flex flex-col justify-between"
            style={{ backgroundImage: "url(/assets/event_bg_3.jpg)" }}
          >
            <Link to="/events/ongoing" className="h-full flex flex-col justify-between">
              <h1 className="text-2xl font-medium">ongoing</h1>
              <p className="text-xs lg:text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, minus sapiente libero, illo et ea ducimus, mollitia
                nemo ex numquam quis distinctio nostrum alias delectus iste
                earum repellat repudiandae omnis!
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AllEvents;
